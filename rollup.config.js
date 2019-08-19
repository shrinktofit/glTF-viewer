
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
// import { uglify } from 'rollup-plugin-uglify';

export default {
    input: "./src/index.ts",
    output: [
        {
            file: './dist/system/glTF-viewer.js',
            sourcemap: true,
            format: 'system',
        },
    ],
    external: [
        'cc',
    ],
    plugins: [
        resolve({
            extensions: ['.js', '.ts', '.json'],
        }),

        commonjs({
            ignore: [
                'cc',
            ],
            namedExports: {
                '@cocos-creator-3d/cc-gltf': [
                    'readGltf',
                    'GltfConverter',
                    'AssetFinderKind',
                    'NormalImportSetting',
                    'TangentImportSetting',
                ],
            },
        }),

        babel({
            extensions: ['.js', '.ts'],
            highlightCode: true,
            ignore: [
            ],
            plugins: [
                ['@babel/plugin-proposal-decorators', {
                    legacy: true,
                }],
                ['@babel/plugin-proposal-class-properties', {
                    loose: true,
                }],
            ],
            presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
            ],
        }),

        json(),
    ],
};