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

export default class ARSceneCatchPage extends Component {
    constructor(prop,ctx){
        super(prop,ctx);

    }



    render(){

        return (  
                <ViroARScene>
                    <ViroAmbientLight color="#ffffff" intensity={200} />

                    <ViroNode position={[0, -1, -2]} dragType="FixedToWorld" onDrag={() => { }} animation={{name:"animateObject",loop:true}}>
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



}