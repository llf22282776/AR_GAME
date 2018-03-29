//种虫页面，需要什么呢？？？
//接受参数：
//selectType: 选择的状态
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
    ViroParticleEmitter
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

export default class ARSceneSelectPage extends Component {

    constructor(props) {
        super(props);
        this.renderGameEffect = this.renderGameEffect.bind(this);
    }
    render() {
        const { index } = this.props.arSceneNavigator.viroAppProps.ar.select; //监听的index
        console.log("new index:" + index);

        if (index == 0) {
            //让一个方块不停跑动的效果
            return (
                <ViroARScene>
                    <ViroAmbientLight color="#ffffff" intensity={200} />

                    <ViroNode position={[0, -1, -2]} dragType="FixedToWorld" onDrag={() => { }}>
                        <ViroSpotLight
                            innerAngle={5}
                            outerAngle={25}
                            direction={[0, -1, 0]}
                            position={[0, 5, 0]}
                            color="#ffffff"
                            castsShadow={true}
                            shadowMapSize={2048}
                            shadowNearZ={2}
                            shadowFarZ={7}
                            shadowOpacity={.7}
                        />

                        <Viro3DObject
                            source={require('../resources/res/icecreamman_anim/icecreamman_anim_a.vrx')}
                            resources={[require('../resources/res/icecreamman_anim/icecreamman_diffuse.png'),
                            require('../resources/res/icecreamman_anim/icecreamman_normal.png'),
                            require('../resources/res/icecreamman_anim/icecreamman_specular.png')]}
                            position={[0, 0, 0]}
                            scale={[.5, .5, .5]}
                            type="VRX"
                            onClick={this._onTappedIcecream}
                            animation={{ name: "02", run: true, loop: true, }}
                        />

                        <ViroSurface
                            rotation={[-90, 0, 0]}
                            position={[0, -.001, 0]}
                            width={2.5} height={2.5}
                            arShadowReceiver={true}
                        />
                    </ViroNode>

                </ViroARScene>
            );
        } else {
            return (<ViroARScene>
                <ViroAmbientLight color="#ffffff" intensity={200} />

                <ViroNode position={[0, -1, -2]} dragType="FixedToWorld" onDrag={() => { }}>
                    <ViroSpotLight
                        innerAngle={5}
                        outerAngle={25}
                        direction={[0, -1, 0]}
                        position={[0, 5, 0]}
                        color="#ffffff"
                        castsShadow={true}
                        shadowMapSize={2048}
                        shadowNearZ={2}
                        shadowFarZ={7}
                        shadowOpacity={.7}
                    />

                    <ViroBox
                        position={[0, 0, 0]}
                        scale={[.8, .8, .8]}
                        materials={['grid']}
                    />

                    <ViroSurface
                        rotation={[-90, 0, 0]}
                        position={[0, -.001, 0]}
                        width={2.5} height={2.5}
                        arShadowReceiver={true}
                    />
                </ViroNode>

            </ViroARScene>);
        }


    }
    renderGameEffect(index) {
        //渲染游戏动画



    }


}