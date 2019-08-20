import { _decorator, Component, systemEvent, SystemEventType, Vec3, Node, Quat, math } from 'cc';

enum Button {
    Left = 0,
    Middle = 1,
    Right = 2,
}

@_decorator.ccclass('FirstPersonCamera')
export class FirstPersonCamera extends Component {
    private _buttonStates: Partial<Record<Button, boolean>> = {};

    @_decorator.property
    public horizontalRotationFactor = 0.1;

    @_decorator.property
    public verticalRotationFactor = 0.1;

    @_decorator.property
    public translationFactor = 0.01;

    constructor() {
        super();
    }

    public start() {
        systemEvent.on(SystemEventType.MOUSE_WHEEL, (eventMouse) => {
            const dy = eventMouse.getScrollY();
            const dir = this.node.forward;
            dir.multiplyScalar(-dy * 0.001);
            translateNode(this.node, dir);
        });

        systemEvent.on(SystemEventType.MOUSE_DOWN, (eventMouse) => {
            const button = eventMouse.getButton();
            if (button === null || !(button in Button)) {
                return;
            } else {
                this._buttonStates[button as Button] = true;
            }
        });

        systemEvent.on(SystemEventType.MOUSE_UP, (eventMouse) => {
            const button = eventMouse.getButton();
            if (button === null || !(button in Button)) {
                return;
            } else {
                this._buttonStates[button as Button] = false;
            }
        });

        systemEvent.on(SystemEventType.MOUSE_MOVE, (eventMouse) => {
            const dx = eventMouse.getDeltaX();
            const dy = eventMouse.getDeltaY();
            if (this._buttonStates[Button.Middle]) {
                const right = this._getRight();
                right.multiplyScalar(dx * this.translationFactor);
                const up = this._getUp();
                up.multiplyScalar(dy * this.translationFactor);
                translateNode(this.node, right.add(up));
            }
            if (this._buttonStates[Button.Right]) {
                if (dx !== 0) {
                    this.node.rotate(Quat.fromAxisAngle(new Quat(), Vec3.UNIT_Y, math.toRadian(dx * this.horizontalRotationFactor)));
                }
                if (dy !== 0) {

                }
            }
        });
    }

    private _getUp(): Vec3 {
        return Vec3.transformQuat(new Vec3(), Vec3.UNIT_Y, this.node.getWorldRotation());
    }

    private _getRight(): Vec3 {
        return Vec3.transformQuat(new Vec3(), Vec3.UNIT_X, this.node.getWorldRotation());
    }
}

function translateNode(node: Node, offset: Vec3) {
    const position = node.getWorldPosition();
    position.add(offset);
    node.setWorldPosition(position);
}