
import { GltfConverter, readGltf, GLTFHost, NormalImportSetting, TangentImportSetting, AssetFinderKind, AssetFinder, AssetFinderResultMap } from '@cocos-creator-3d/cc-gltf';
import * as cc from 'cc';

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
        cc.game.run({}, () => {
            console.log(`I'm started.`);
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

        const ccMeshes: cc.Mesh[] = [];
        if (glTF.meshes) {
            glTF.meshes.forEach((glTFMesh, glTFMeshIndex) => {
                const ccMesh = glTFConverter.createMesh(glTFMeshIndex, {
                    normals: NormalImportSetting.require,
                    tangents: TangentImportSetting.require,
                });
                assetFinder[AssetFinderKind.mesh].push(ccMesh);
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
                scene.addChild(ccSceneNode);
            });
        }
    }
}