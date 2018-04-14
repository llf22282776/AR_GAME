//
'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
    ViroARScene,
    ViroText,
    ViroNode,
    ViroButton,
    ViroBox,
    ViroScene,
    ViroSurface,
    Viro3DObject,
    ViroARPlaneSelector,
    ViroARPlane,
    ViroSpotLight,
    ViroDirectionalLight,
    ViroMaterials,
    ViroFlexView,
    ViroImage,
    ViroPortalScene,
    ViroPortal,
    Viro360Image,
    ViroAmbientLight,
    ViroParticleEmitter,
    ViroSphere,
    ViroController
} from 'react-viro';
import TimeMix from 'react-timer-mixin'
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    List,
    Right,
    Body,
    Icon,
    Card,
    CardItem,
    ListItem,
    Thumbnail,

} from 'native-base';

import { styles, sharedProps, gameList } from '../util/Constants';
import Icon1 from 'react-native-vector-icons/FontAwesome'
import Modal from 'react-native-modal'
const initBallPosition = [0, 0, -1.0];
const initBallPhyiscs = {
    friction: 0.6,
    type: 'Dynamic',
    mass: 4,
    enabled: true,
    useGravity: true,
    shape: {
        type: 'Sphere',
        params: [0.14]
    },
    restitution: 0.65
};
export default class ARSceneCatchPage extends Component {
    constructor(prop, ctx) {
        super(prop, ctx);
        this.state = {
            imageUrl: require("../resources/portal_res/2.jpg"), //直接预加载
            move: true,
            run: false,
            gForce: 10,
            forces: [0, 0, 0],
            viroAppProps: this.props.arSceneNavigator.viroAppProps, //只能获取一次，不能实时通信，需要通信吗？？
            animate: { name: "animateObject", run: true },
            ballTag: "ballTag",
            objectTag: "objectTag",
            unvisiableTag: "unvisiableTag",
            initBallPosition: [0, 0, -1.0],
            initBallPhyiscs: {
                friction: 0.6,
                type: 'Dynamic',
                mass: 4,
                enabled: true,
                useGravity: true,
                shape: {
                    type: 'Sphere',
                    params: [0.14]
                },
                restitution: 0.65
            },
        }
        this.renderGame = this.renderGame.bind(this);
        this.renderGame1 = this.renderGame1.bind(this);
        this.renderGame2 = this.renderGame2.bind(this);

        this.onCollide = this.onCollide.bind(this);
        this.onClick = this.onClick.bind(this);
        this._setBoxRef = this._setBoxRef.bind(this);
        this._setControllerNodeRef = this._setControllerNodeRef.bind(this);

    }

    /**
     * 
     *          需要在这里实现
     *          1.初始两个物体：被攻击物体和攻击物体
     *          2.效果：攻击物体由用户点击触发，弹出去攻击被攻击物体，
     *          3.
     * 
     * 
     */

    render() {
        const { typeIndex } = this.state.viroAppProps; //游戏界面只需要index,

        return this.renderGame(typeIndex);



    }

    renderGame(typeIndex) {
        if (typeIndex == 0) {
            return this.renderGame1();
        } else {
            return this.renderGame2();
        }


    }
    renderGame1() {
        //这里渲染game1
        return (
            <ViroARScene physicsWorld={{
                gravity: [0, -1 * this.state.gForce, 0]
            }}>
                <ViroAmbientLight color="#ffffff" intensity={200} />
                <ViroController ref={this._setControllerNodeRef} />
                <ViroNode position={[0, -1, -2]} dragType="FixedToWorld" onDrag={undefined}>

                    <Viro3DObject
                        ref={(component) => { this._3dObject = component }}
                        source={require('../resources/res/icecreamman_anim/icecreamman_anim_a.vrx')}
                        resources={[require('../resources/res/icecreamman_anim/icecreamman_diffuse.png'),
                        require('../resources/res/icecreamman_anim/icecreamman_normal.png'),
                        require('../resources/res/icecreamman_anim/icecreamman_specular.png')]}
                        physicsBody={{ type: 'Static', restitution: 0.75 }}
                        position={[0, 0, 0]}
                        scale={[.5, .5, .5]}
                        type="VRX"
                        viroTag={this.state.objectTag}
                        animation={undefined}
                    />


                </ViroNode>
                {/*以下是一个球*/}
                <ViroNode
                    ref={this._setBoxRef}
                    position={[0, 0, -1]}
                    onClick={this.onClick}
                    viroTag="MySpecialBox"
                    onCollision={this.onCollide}>

                    <Viro3DObject
                        source={require('../resources/res/object_basketball_pbr.vrx')}
                        scale={[0.5, 0.5, 0.5]}
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        resources={[require('../resources/res/blinn1_Base_Color.png'),
                        require('../resources/res/blinn1_Metallic.png'),
                        require('../resources/res/blinn1_Roughness.png'),
                        require('../resources/res/blinn1_Normal_OpenGL.png')]}
                        type="VRX"
                        physicsBody={
                            this.state.initBallPhyiscs
                        }
                        viroTag={this.state.ballTag}
                        onClick={undefined}
                        onCollision={this.onCollide}
                        onDrag={() => { }} />

                </ViroNode>
                <ViroSurface
                    position={[0, -1, 0]}
                    scale={[6.0, 8.0, 3.0]}
                    rotation={[-90, 0, 0]}
                    physicsBody={{ type: 'Static', restitution: 0.75 }}
                    onClickState={undefined}
                    ref={(component) => { this.floorSurface = component }}
                    materials={'ground'} />

                <ViroSurface
                    position={[0, -3, 0]}
                    scale={[100, 100, 100]}
                    rotation={[-90, 0, 0]}
                    physicsBody={{ type: 'Static', restitution: 0.75 }}
                    onClickState={undefined}
                    ref={(component) => { this.unvisiableFloorSurface = component }}
                    viroTag={this.state.unvisiableTag}
                    materials={'unGround'} />
            </ViroARScene >
        );

    }
    _setBoxRef(component) {
        this.boxRef = component;
    }
    _setControllerNodeRef(component) {
        this.controllerRef = component;
    }
    renderGame2() {
        return (
            <ViroARScene>
                <ViroAmbientLight color="#ffffff" intensity={200} />
                <ViroPortalScene dragType="FixedDistance" passable={true} >
                    <ViroPortal position={[0, 0, -1]} scale={[.3, .3, .3]}>
                        <Viro3DObject source={require('../resources/portal_res/portal_wood_frame/portal_wood_frame.vrx')}
                            resources={[require('../resources/portal_res/portal_wood_frame/portal_wood_frame_diffuse.png'),
                            require('../resources/portal_res/portal_wood_frame/portal_wood_frame_normal.png'),
                            require('../resources/portal_res/portal_wood_frame/portal_wood_frame_specular.png')]}
                            type="VRX" />
                    </ViroPortal>
                    <Viro360Image source={require("../resources/portal_res/2.jpg")} />
                </ViroPortalScene>

            </ViroARScene>
        );

    }
    onCollide(collidedTag, collidedPoint, collidedNormal) {
        console.log("collidedTag:" + collidedTag)
        if (collidedTag == this.state.objectTag) {
            this._3dObject.setNativeProps({
                animation: this.state.animate
            });
        } else if (collidedTag == this.state.unvisiableTag) {

            TimeMix.setTimeout(() => {
                console.log("  this.boxRef")
                console.log(this.boxRef);
                this.boxRef.setNativeProps({ "physicsBody": null });
                this.boxRef.setNativeProps({ "position": initBallPosition });
                TimeMix.setTimeout(() => {
                    this.boxRef.setNativeProps({ "physicsBody": initBallPhyiscs });
                }, 500);
            }, 500);
        }
        // console.log("Viro box has collided on the " + collidedTag);
        // if (collidedTag == "BallTag") {
        //     this.floorSurface.setNativeProps({ materials: ["ground_hit"] });
        // }

    }


    onClick(clickedPos, source) {
        console.log("helpppppp!");
        this.setState({ move: true });
        console.log("clickedPos");
        console.log(clickedPos);
        console.log("source");
        console.log(source);
        this.controllerRef.getControllerForwardAsync().then((forward) => {
            console.log("forward");
            console.log(forward);
            var pushStrength = 1.5;
            console.log("pushImpulse");
            var pushImpulse = [forward[0] * pushStrength, forward[1] * pushStrength, forward[2] * pushStrength];
            console.log(pushImpulse);
            this.boxRef.getTransformAsync().then((transform) => {
                var pos = transform.position;
                var pushPosition = [clickedPos[0] - pos[0], clickedPos[1] - pos[1], clickedPos[2] - pos[2]];
                console.log("pushPosition");
                console.log(pushPosition);
                this.boxRef.applyImpulse(pushImpulse, pushPosition);
            }).catch(() => { });
        }).catch(() => { });


    }

}