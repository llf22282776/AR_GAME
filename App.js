/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import {
  ViroSceneNavigator,
  ViroARSceneNavigator
} from 'react-viro';
import ARPortalScene from './js/ARPortalScene'
import AR3dObject from './js/AR3dObject'
import VRMedio from './js/ARMedio'
import ARPortalSceneVideo from './js/ARPortalSceneVideo'
import ARcorton from './js/ARcorton'
/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey: "142365C9-3C5A-4250-AD1A-FD21C10322EB",
}

// Sets the default scene you want for AR and VR
var InitialARScene = require('./js/HelloWorldSceneAR');
var InitialVRScene = require('./js/HelloWorldScene');

var UNSET = "UNSET";
var VR_NAVIGATOR_TYPE = "VR";
var AR_NAVIGATOR_TYPE = "AR";
var BUTTON_TYPE = {
  VR: "VR",
  AR_1: "AR",
  AR_2: "AR_PORTAL",
  AR_3: "AR_3D",
  AR_4: "AR_4",
  AR_5: "AR_5",
  AR_6: "AR_6",


}
// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      sharedProps: sharedProps
    }
    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);
    this._getVRNavigator = this._getVRNavigator.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
    this._exitViro = this._exitViro.bind(this);
    this._returnARSpecScene = this._returnARSpecScene.bind(this);
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == VR_NAVIGATOR_TYPE) {
      return this._getVRNavigator();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
      return this._getARNavigator();
    } else {
      return this._returnARSpecScene(this.state.navigatorType);//other scene choose
    }
  }

  // Presents the user with a choice of an AR or VR experience
  _getExperienceSelector() {
    return (
      <View style={localStyles.outer} >
        <ScrollView  >

          <Text style={localStyles.titleText}>
            选择场景
          </Text>

          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
            underlayColor={'#68a0ff'} >

            <Text style={localStyles.buttonText}>单物体AR效果</Text>
          </TouchableHighlight>




          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(BUTTON_TYPE.AR_3)}
            underlayColor={'#68a0ff'} >

            <Text style={localStyles.buttonText}>AR3D物体</Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(BUTTON_TYPE.AR_2)}
            underlayColor={'#68a0ff'} >

            <Text style={localStyles.buttonText}>AR景中景</Text>
          </TouchableHighlight>
          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(BUTTON_TYPE.AR_5)}
            underlayColor={'#68a0ff'} >

            <Text style={localStyles.buttonText}>AR景中视频</Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(BUTTON_TYPE.AR_4)}
            underlayColor={'#68a0ff'} >

            <Text style={localStyles.buttonText}>360相机场景/视频</Text>
          </TouchableHighlight>
          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(VR_NAVIGATOR_TYPE)}
            underlayColor={'#68a0ff'} >

            <Text style={localStyles.buttonText}>VR场景</Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(BUTTON_TYPE.AR_6)}
            underlayColor={'#68a0ff'} >

            <Text style={localStyles.buttonText}>小动画</Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1  }}>
          <ViroARSceneNavigator {...this.state.sharedProps}
            initialScene={{ scene: InitialARScene }} />
        </View>
        <View style={{ position: 'absolute', backgroundColor: "#ffffff22", left: 30, right: 30, bottom: 30, alignItems: 'center' }}>
          <Text style={{ fontSize: 12, color: "#ffffff" }}>Waiting for tracking to initialize.</Text>
        </View>
      </View>

    );
  }

  // Returns the ViroSceneNavigator which will start the VR experience
  _getVRNavigator() {
    return (
      <View style={{ flex: 1 }}>
        <ViroSceneNavigator style={{ flex: 1 }}{...this.state.sharedProps}
          initialScene={{ scene: InitialVRScene }} onExitViro={this._exitViro} />
        <View style={{ position: 'absolute', backgroundColor: "#ffffff22", left: 30, right: 30, bottom: 30, alignItems: 'center' }}>
          <Text style={{ fontSize: 12, color: "#ffffff" }}>Waiting for tracking to initialize.</Text>
        </View>
      </View>
    );
  }

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType: navigatorType
      })
    }
  }

  _returnARSpecScene(type) {
    if (type == BUTTON_TYPE.AR_2)//景中景
    {
      return (

        <ViroARSceneNavigator {...this.state.sharedProps}
          initialScene={{ scene: ARPortalScene }} onExitViro={this._exitViro} />

      );

    } else if (type == BUTTON_TYPE.AR_3) {
      return (
        <ViroARSceneNavigator {...this.state.sharedProps}
          initialScene={{ scene: AR3dObject }} onExitViro={this._exitViro} />
      );

    } else if (type == BUTTON_TYPE.AR_4) {
      return (
        <ViroSceneNavigator {...this.state.sharedProps}
          initialScene={{ scene: VRMedio }} onExitViro={this._exitViro} />
      );


    } else if (type == BUTTON_TYPE.AR_5) {
      return (
        <ViroARSceneNavigator {...this.state.sharedProps}
          initialScene={{ scene: ARPortalSceneVideo }} onExitViro={this._exitViro} />
      );


    } else if (type == BUTTON_TYPE.AR_6) {
      return (
        <ViroARSceneNavigator {...this.state.sharedProps}
          initialScene={{ scene: ARcorton }} onExitViro={this._exitViro} />
      );


    }
  }
  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType: UNSET
    })
  }
}

var localStyles = StyleSheet.create({
  viroContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  outer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "black",
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color: '#fff',
    textAlign: 'center',
    fontSize: 25
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  container: {
    flexDirection: 'column',


  }
});

module.exports = ViroSample
