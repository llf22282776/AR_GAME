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
    ViroMaterials,
    ViroFlexView,
    ViroImage,
    ViroPortalScene,
    ViroPortal,
    Viro360Image,
    ViroAmbientLight,
    ViroSphere,
    ViroSpotLight
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

        this.renderSelectGame = this.renderSelectGame.bind(this);
        this.state = {
            index: this.props.arSceneNavigator.viroAppProps.ar.select.index
        };
    }
    render() {

        console.log("start render select game scene!");
        return this.renderSelectGame(this.state.index);


    }
    componentWillReceiveProps(props_next) {
        //属性发生改变
        console.log("props_next");
        console.log(props_next);
        this.setState({ index: props_next.arSceneNavigator.viroAppProps.ar.select.index });

    }
    renderSelectGame(index) {
        console.log("index is !!!!!!!!!!!!:" + index);
        switch (index) {
            case 0: {
                //让一个方块不停跑动的效果
                return (
                    <ViroARScene>
                        <ViroAmbientLight color="#ffffff" intensity={200} />

                        <ViroNode position={[0, -1, -2]} dragType="FixedToWorld" onDrag={() => { }}>
           
                            <Viro3DObject
                                source={require('../resources/res/icecreamman_anim/icecreamman_anim_a.vrx')}
                                resources={[require('../resources/res/icecreamman_anim/icecreamman_diffuse.png'),
                                require('../resources/res/icecreamman_anim/icecreamman_normal.png'),
                                require('../resources/res/icecreamman_anim/icecreamman_specular.png')]}
                                position={[0, 0, 0]}
                                scale={[.5, .5, .5]}
                                type="VRX"
                                onClick={this._onTappedIcecream}
                                animation={{ name: "02", run:false, loop: false, }}
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
        

            }
            case 1: {
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

                    </ViroARScene>);
            }
            default: return null;
        }
    }

}