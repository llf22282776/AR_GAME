'use strict';

import React, { Component } from 'react';

import {StyleSheet,View,Text} from 'react-native';

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

export default class ARPortalSceneVideo extends Component {
    constructor(){
        super();
    }

    render(){
     return (
      <ViroARScene>
       <ViroAmbientLight color="#ffffff" intensity={200}/>
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
          <ViroPortal position={[0, 0, -1]} scale={[.1, .1, .1]}>
            <Viro3DObject source={require('./portal_res/portal_ship/portal_ship.vrx')}
              resources={[require('./portal_res/portal_ship/portal_ship_diffuse.png'),
                          require('./portal_res/portal_ship/portal_ship_normal.png'),
                          require('./portal_res/portal_ship/portal_ship_specular.png')]}
              type="VRX"/>
          </ViroPortal>
           <Viro360Video source={require("./portal_res/MediaDemo360_1.mp4")} loop={true} />
        </ViroPortalScene>
  
      </ViroARScene>
);

    }

}