import { utils, Node, ModelComponent, Material, EffectAsset, Color, GFXPrimitiveMode, loader } from 'cc';

export function makeGrid(halfWidth: number, halfLength: number, unit: number = 1) {
    const mesh = utils.createMesh(createGridGeometery(halfWidth, halfLength, unit));
    const gridNode = new Node('Grid');
    const modelComponent = gridNode.addComponent(ModelComponent);
    modelComponent!.mesh = mesh;
    const material = new Material();
    material.initialize({
        effectAsset: EffectAsset.get('builtin-unlit'),
        states: {
            primitive: GFXPrimitiveMode.LINE_LIST,
        },
    });
    material.setProperty('color', Color.WHITE);
    modelComponent!.material = material;
    return gridNode;
}

function createGridGeometery(halfWidth: number, halfLength: number, unit: number) {
    const nXVertices = halfWidth * 2 + 1;
    const nZVertices = halfLength * 2 + 1;
    const nVertices = (nXVertices + nZVertices) * 2;
    let positions = new Array<number>(nVertices * 3);
    const setPosition = (iVertex: number, x: number, y: number, z: number) => {
        positions[iVertex * 3 + 0] = x * unit;
        positions[iVertex * 3 + 1] = y * unit;
        positions[iVertex * 3 + 2] = z * unit;
    };
    for (let iXVertex = 0; iXVertex < nXVertices; ++iXVertex) {
        const x = -halfWidth + iXVertex;
        setPosition(iXVertex * 2 + 0, x, 0, -halfLength);
        setPosition(iXVertex * 2 + 1, x, 0, halfLength);
    }
    const horizontalLineBase = nXVertices * 2;
    for (let iZVertex = 0; iZVertex < nZVertices; ++iZVertex) {
        const z = -halfLength + iZVertex;
        setPosition(horizontalLineBase + iZVertex * 2 + 0, -halfWidth, 0, z);
        setPosition(horizontalLineBase + iZVertex * 2 + 1, halfWidth, 0, z);
    }
    let colors = new Array<number>(nVertices * 4).fill(1);
    return {
        positions,
        colors,
        primitiveMode: GFXPrimitiveMode.LINE_LIST,
    };
}