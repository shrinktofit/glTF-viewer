
import { GltfConverter, readGltf, GLTFHost, NormalImportSetting, TangentImportSetting, AssetFinderKind, AssetFinder, AssetFinderResultMap } from '@cocos-creator-3d/cc-gltf';
import * as cc from 'cc';
import { FirstPersonCamera } from './FirstPersonCamera';
import { makeGrid } from './Grid';

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
                cameraComponent!.color = new cc.Color(127, 127, 127, 255);
                cameraNode.setPosition(new cc.Vec3(3, 3, 3));
                cameraNode.lookAt(cc.Vec3.ZERO);
                cameraNode.addComponent(FirstPersonCamera);
                const mainLightNode = new cc.Node();
                // @ts-ignore
                scene.addChild(mainLightNode);
                const lightComponent = mainLightNode.addComponent(cc.LightComponent);
                const gridNode = makeGrid(50, 50);
                // @ts-ignore
                scene.addChild(gridNode);
            });
        });
    }

    public async load(glTFFileUrl: string) {
        const { gltf, binaryBuffers } = await readGltf(glTFFileUrl, this._glTFHost);
        const glTFConverter = new GltfConverter(gltf, binaryBuffers, glTFFileUrl);
        await this._onGlTFFileFetched(glTFConverter, glTFFileUrl);
    }

    private async _onGlTFFileFetched(glTFConverter: GltfConverter, glTFFileUrl: string) {
        const glTF = glTFConverter.gltf;

        type MyFinder = Record<AssetFinderKind, AssetFinderResultMap[AssetFinderKind]> & AssetFinder;

        const assetFinder: MyFinder = {
            [AssetFinderKind.mesh]: [] as cc.Mesh[],
            [AssetFinderKind.animation]: [] as cc.AnimationClip[],
            [AssetFinderKind.skeleton]: [] as cc.Skeleton[],
            [AssetFinderKind.texture]: [] as cc.Texture2D[],
            [AssetFinderKind.material]: [] as cc.Material[],
            [AssetFinderKind.image]: [] as cc.ImageAsset[],
            find: <AFK extends AssetFinderKind>(kind: AFK, index: number): AssetFinderResultMap[AFK] => {
                return (kind in assetFinder) ? (assetFinder[kind][index] || null) : null;
            }
        };

        if (glTF.meshes) {
            assetFinder[AssetFinderKind.mesh] = glTF.meshes.map((glTFMesh, glTFMeshIndex) => {
                const ccMesh = glTFConverter.createMesh(glTFMeshIndex, {
                    normals: NormalImportSetting.require,
                    tangents: TangentImportSetting.require,
                });
                return ccMesh;
            });
        }

        if (glTF.images) {
            assetFinder[AssetFinderKind.image] = await Promise.all(glTF.images.map(async (glTFImage, glTFImageIndex) => {
                const ccImage = await glTFConverter.createImage(glTFImageIndex);
                return ccImage;
            }));
        }

        if (glTF.textures) {
            assetFinder[AssetFinderKind.texture] = glTF.textures.map((glTFTexture, glTFTextureIndex) => {
                const ccTexture = glTFConverter.createTexture(glTFTextureIndex, assetFinder);
                return ccTexture;
            });
        }

        if (glTF.materials) {
            assetFinder[AssetFinderKind.material] = glTF.materials.map((glTFMaterial, glTFMaterialIndex) => {
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
                return ccMaterial;
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
                ccSceneNode.setScale(100, 100, 100);
                scene.addChild(ccSceneNode);
            });
        }
    }
}