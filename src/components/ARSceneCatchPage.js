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

export default class ARSceneCatchPage extends Component {
    constructor(prop, ctx) {
        super(prop, ctx);
        this.state = {
            imageUrl: require("../resources/portal_res/2.jpg"), //直接预加载
            move: false,
            run: false,
            gForce: 9.8,
            forces: [0, 0, 0],
            viroAppProps: this.props.arSceneNavigator.viroAppProps //只能获取一次，不能实时通信，需要通信吗？？

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
                gravity: [0, -2 * this.state.gForce, 0]
            }}>
                <ViroAmbientLight color="#ffffff" intensity={200} />
                <ViroController ref={this._setControllerNodeRef} />

                <ViroNode
                    ref={this._setBoxRef}
                    position={[-1, -1.5, -2]}
                    height={1} width={1} length={1}
                    physicsBody={{
                        type: 'Dynamic',
                        mass: 1,
                      
                        useGravity: this.state.move,
                        force: {
                            value: this.state.forces,
                        },
                        shape: {
                            type: "Compound"
                        }
                    }}
                    onClick={this.onClick}
                    viroTag="MySpecialBox"
                    onCollision={this.onCollide}>

                    <ViroSphere
                        materials={['grid']}
                    />
                </ViroNode>


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
    onCollide() {

        this.setState({ run: true })

    }
    onClick(clickedPos, source) {
        console.log("helpppppp!");
        console.log(clickedPos);
        console.log(source);
        this.controllerRef.getControllerForwardAsync().then((forward) => {
            var pushStrength = 1.5;
            var pushImpulse = [forward[0] * pushStrength, forward[1] * pushStrength, forward[2] * pushStrength];
            this.boxRef.getTransformAsync().then((transform) => {
                var pos = transform.position;
                var pushPosition = [clickedPos[0] - pos[0], clickedPos[1] - pos[1], clickedPos[2] - pos[2]];
                this.boxRef.applyImpulse(pushImpulse, pushPosition);
            }).catch(() => { });
        }).catch(() => { });


    }

}