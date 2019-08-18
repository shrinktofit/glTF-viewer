var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { GltfConverter, readGltf, NormalImportSetting, TangentImportSetting, AssetFinderKind } from '@cocos-creator-3d/cc-gltf';
import * as cc from 'cc';
var Viewer = /** @class */ (function () {
    function Viewer(canvas) {
        this._glTFHost = {
            readJSON: function (uri) {
                return __awaiter(this, void 0, void 0, function () {
                    var response;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, fetch(uri)];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response.json()];
                        }
                    });
                });
            },
            readBuffer: function (uri) {
                return __awaiter(this, void 0, void 0, function () {
                    var response;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, fetch(uri)];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response.arrayBuffer()];
                        }
                    });
                });
            }
        };
        cc.game.run({}, function () {
            console.log("I'm started.");
        });
    }
    Viewer.prototype.load = function (glTFFileUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, gltf, binaryBuffers, glTFConverter;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, readGltf(glTFFileUrl, this._glTFHost)];
                    case 1:
                        _a = _b.sent(), gltf = _a.gltf, binaryBuffers = _a.binaryBuffers;
                        glTFConverter = new GltfConverter(gltf, binaryBuffers, glTFFileUrl);
                        this._onGlTFFileFetched(glTFConverter, glTFFileUrl);
                        return [2 /*return*/];
                }
            });
        });
    };
    Viewer.prototype._onGlTFFileFetched = function (glTFConverter, glTFFileUrl) {
        var _a;
        var glTF = glTFConverter.gltf;
        var assetFinder = (_a = {},
            _a[AssetFinderKind.mesh] = [],
            _a[AssetFinderKind.animation] = [],
            _a[AssetFinderKind.skeleton] = [],
            _a[AssetFinderKind.texture] = [],
            _a[AssetFinderKind.material] = [],
            _a.find = function (kind, index) {
                return (kind in assetFinder) ? (assetFinder[kind][index] || null) : null;
            },
            _a);
        var ccMeshes = [];
        if (glTF.meshes) {
            glTF.meshes.forEach(function (glTFMesh, glTFMeshIndex) {
                var ccMesh = glTFConverter.createMesh(glTFMeshIndex, {
                    normals: NormalImportSetting.require,
                    tangents: TangentImportSetting.require,
                });
                assetFinder[AssetFinderKind.mesh].push(ccMesh);
            });
        }
        var ccSceneNodes = [];
        if (glTF.scenes) {
            glTF.scenes.forEach(function (glTFScene, glTFSceneIndex) {
                var ccNode = glTFConverter.createScene(glTFSceneIndex, assetFinder);
                ccSceneNodes.push(ccNode);
            });
        }
        var scene = cc.director.getScene();
        if (scene) {
            ccSceneNodes.forEach(function (ccSceneNode) {
                // @ts-ignore
                scene.addChild(ccSceneNode);
            });
        }
    };
    return Viewer;
}());
export { Viewer };
