'use strict';

/**
 * Pull in all imports required for the controls within this scene.
 */
import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  AppRegistry,
  ViroScene,
  ViroVideo,
  ViroSceneNavigator,
  ViroMaterials,
  Viro360Image,
  ViroButton,
  ViroImage,
  ViroNode,
  ViroAnimations,
  ViroUtils,
} from 'react-viro';

var createReactClass = require('create-react-class');

/**
 * Set all the image and asset references required in this scene.
 */
var buttonSize = 0.25;
var VIDEO_REF = "videoref";
var VideoControlRef = "VideoControlRef";

/**
 * Several references to video sources (wether it be local or on AWS) stored in an array.
 */
var videos = [
  {uri:'file:///./portal_res/MediaDemo360_1.mp4',}
 
];

var VRMedio = createReactClass({
  getInitialState() {
    return {
      videoControlsAnimation:"fadeIn",
      videoPaused: false,
      loopVideo: true,
      videoIndex: 0,
      runAnimation: false,
    }
  },

  /**
   * Renders a scene that contains a 360 video and Video Controls.
   */
  render: function() {
    return (
        <ViroScene  reticleEnabled={this.state.videoControlsAnimation=="fadeIn"}>
          <Viro360Image source={require('./res/dark_theatre.jpg')} />
          <ViroVideo ref={VIDEO_REF} source={videos[this.state.videoIndex]} volume={1.0}
            position={[0, 3.9, -45]} scale={[44, 22, 1]} loop={this.state.loopVideo}
            paused={this.state.videoPaused} />
        </ViroScene>
    );
  }



});

ViroAnimations.registerAnimations({
  fadeOut:{properties:{opacity: 0.0}, duration: 500},
  fadeIn:{properties:{opacity: 1.0}, duration: 500},
});

ViroMaterials.createMaterials({
  opaqueWhite: {
    shininess: 2.0,
    lightingModel: "Lambert",
    diffuseColor: "#FFFFFF"
  },
});

module.exports = VRMedio;