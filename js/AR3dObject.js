'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    ViroARScene,
    ViroText,
    ViroMaterials,
    ViroBox,
    Viro3DObject,
    ViroAmbientLight,
    ViroSpotLight,
    ViroARPlaneSelector,
    ViroNode,
    ViroAnimations,
} from 'react-viro';


export default class ARPortalScene extends Component {
    constructor() {
        super();
        this.state={
            text:"Initializing AR..."
        }
    }

    render() {
        return (
            <ViroARScene onTrackingInitialized={() => { this.setState({ text: "Hello World!" }) }}>
                <ViroText text={this.state.text} scale={[.1, .1, .1]} height={1} width={4} position={[0, .5, -1]} style={styles.helloWorldTextStyle} />

                <ViroAmbientLight color={"#aaaaaa"} />
                <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]} position={[0, 3, 1]} color="#ffffff" castsShadow={true} />

                <ViroNode position={[0, 0, -1]} dragType="FixedToWorld" onDrag={() => { }} >
                    <Viro3DObject
                        source={require('./res/emoji_smile/emoji_smile.vrx')}
                        position={[0, .1, 0]}
                        scale={[.2, .2, .2]}
                        type="VRX"
                    />
                </ViroNode>

            </ViroARScene>
        );

    }




}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 50,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});