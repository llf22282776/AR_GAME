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
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingInitialized={this._onInitialized} >

        <ViroNode dragType="FixedDistance" onDrag={() => { }}>
          <ViroBox
            position={[0, 1, -3]}
            height={1} width={1} length={1}

            physicsBody={{
              type: 'Dynamic', mass: 1
            }}
          />
        </ViroNode>

        <ViroBox
          position={[0, -1, -3]}
          height={1} width={1} length={1}
          physicsBody={{
            type: 'Static'
          }}
        />
        <ViroFlexView style={{ flexDirection: 'row', padding: .1 }}
          width={5.0} height={5.0}
          position={[0.0, 0.0, -2.0]}
          rotation={[0, 0, 0]} 
          scale={[.1,.1,.1]}
          >
          <ViroImage source={require('./res/grid_bg.jpg')} style={{ flex: .5 }} />
          <ViroImage source={require('./res/grid_bg.jpg')} style={{ flex: .5 }} />
        </ViroFlexView>
      </ViroARScene>
    );
  }

  _onInitialized() {
    this.setState({
      text: "Hello World!"
    });
  }

}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
    lightingModel: "Lambert",
  },
});
module.exports = HelloWorldSceneAR;
