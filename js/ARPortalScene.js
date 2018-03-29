'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';

import {
  ViroSceneNavigator,
  ViroScene,
  ViroARScene,
  ViroAmbientLight,
  Viro360Video,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
} from 'react-viro';

export default class ARPortalScene extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <ViroARScene>
          <ViroAmbientLight color="#ffffff" intensity={200} />
          <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => { }}>
            <ViroPortal position={[0, 0, -1]} scale={[.3, .3, .3]}>
              <Viro3DObject source={require('./portal_res/portal_wood_frame/portal_wood_frame.vrx')}
                resources={[require('./portal_res/portal_wood_frame/portal_wood_frame_diffuse.png'),
                require('./portal_res/portal_wood_frame/portal_wood_frame_normal.png'),
                require('./portal_res/portal_wood_frame/portal_wood_frame_specular.png')]}
                type="VRX" />
            </ViroPortal>
            <Viro360Image source={require("./portal_res/2.jpg")} />
          </ViroPortalScene>

        </ViroARScene>
      
      </View>
    );

  }

}