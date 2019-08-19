
import { GltfConverter, readGltf, GLTFHost, NormalImportSetting, TangentImportSetting, AssetFinderKind, AssetFinder, AssetFinderResultMap } from '@cocos-creator-3d/cc-gltf';
import * as cc from 'cc';
import { FirstPersonCamera } from './FirstPersonCamera';

export class Viewer {
    private _glTFHost: GLTFHost = {
        async readJSON(uri: string) {
            const response = await fetch(uri);
            return response.json();
        },
        async readBuffer(uri: string) {
            const response = await fetch(uri);
            return response.arrayBuffer();
        }
    };

    constructor(canvas: HTMLCanvasElement) {
        cc.game.run({
            id: canvas.id,
        }, () => {
            const scene = new cc.Scene('Viewer');
            cc.director.runScene(scene, () => {}, () => {
                console.log(`Scene lauched.`);
                const cameraNode = new cc.Node();
                // @ts-ignore
                scene.addChild(cameraNode);
                const cameraComponent = cameraNode.addComponent(cc.CameraComponent);
                cameraComponent!.color = new cc.Color(127, 127, 127);
                cameraNode.setPosition(new cc.Vec3(0, 0, 3));
                cameraNode.addComponent(FirstPersonCamera);
            });
        });
    }

    public async load(glTFFileUrl: string) {
        const { gltf, binaryBuffers } = await readGltf(glTFFileUrl, this._glTFHost);
        const glTFConverter = new GltfConverter(gltf, binaryBuffers, glTFFileUrl);
        this._onGlTFFileFetched(glTFConverter, glTFFileUrl);
    }

    private _onGlTFFileFetched(glTFConverter: GltfConverter, glTFFileUrl: string) {
        const glTF = glTFConverter.gltf;

        type MyFinder = Record<AssetFinderKind, AssetFinderResultMap[AssetFinderKind]> & AssetFinder;

        const assetFinder: MyFinder = {
            [AssetFinderKind.mesh]: [] as cc.Mesh[],
            [AssetFinderKind.animation]: [] as cc.AnimationClip[],
            [AssetFinderKind.skeleton]: [] as cc.Skeleton[],
            [AssetFinderKind.texture]: [] as cc.Texture2D[],
            [AssetFinderKind.material]: [] as cc.Material[],
            find: <AFK extends AssetFinderKind>(kind: AFK, index: number): AssetFinderResultMap[AFK] => {
                return (kind in assetFinder) ? (assetFinder[kind][index] || null) : null;
            }
        };

        if (glTF.meshes) {
            glTF.meshes.forEach((glTFMesh, glTFMeshIndex) => {
                const ccMesh = glTFConverter.createMesh(glTFMeshIndex, {
                    normals: NormalImportSetting.require,
                    tangents: TangentImportSetting.require,
                });
                assetFinder[AssetFinderKind.mesh].push(ccMesh);
            });
        }

        if (glTF.textures) {
            glTF.textures.forEach((glTFTexture, glTFTextureIndex) => {
                const textureParameters = glTFConverter.getTextureParameters(glTFTexture);
                const normalizedParams = Object.assign({
                    wrapModeS: cc.Texture2D.WrapMode.REPEAT,
                    wrapModeT: cc.Texture2D.WrapMode.REPEAT,
                    minFilter: cc.Texture2D.Filter.LINEAR,
                    magFilter: cc.Texture2D.Filter.LINEAR,
                    mipFilter: cc.Texture2D.Filter.NONE,
                }, textureParameters);
                const ccTexture = new cc.Texture2D();
                ccTexture.setFilters(normalizedParams.minFilter, normalizedParams.magFilter);
                ccTexture.setWrapMode(normalizedParams.wrapModeS, normalizedParams.wrapModeT);
                const image = assetFinder.find(AssetFinderKind.image, glTFTexture.image);
                if (image) {
                    ccTexture.image = image;
                }
                assetFinder[AssetFinderKind.texture].push(ccTexture);
            });
        }

        if (glTF.materials) {
            glTF.materials.forEach((glTFMaterial, glTFMaterialIndex) => {
                const ccMaterial = glTFConverter.createMaterial(glTFMaterialIndex, assetFinder, (effectName: string) => {
                    const name = effectName.split('/').pop();
                    if (name) {
                        const nameNoExt = name.split('.').shift();
                        if (nameNoExt) {
                            const effect = cc.EffectAsset.get(nameNoExt);
                            return effect;
                        }
                    }
                    return null;
                });
                ccMaterial.onLoaded();
                assetFinder[AssetFinderKind.material].push(ccMaterial);
            });
        }

        const ccSceneNodes: cc.Node[] = [];
        if (glTF.scenes) {
            glTF.scenes.forEach((glTFScene, glTFSceneIndex) => {
                const ccNode = glTFConverter.createScene(glTFSceneIndex, assetFinder);
                ccSceneNodes.push(ccNode);
            });
        }

        const scene = cc.director.getScene();
        if (scene) {
            ccSceneNodes.forEach((ccSceneNode) => {
                // @ts-ignore
                ccSceneNode.setScale(10, 10, 10);
                scene.addChild(ccSceneNode);
            });
        }
    }
}