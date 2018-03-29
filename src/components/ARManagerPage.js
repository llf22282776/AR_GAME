//这个组件是AR整个游戏各个页面的路由中心集散入口
//接受参数，并根据参数进行渲染，更改字典中的参数（AR中的各个界面需要使用）
//这个组件监听：
/**
 * 1.捉虫还是种虫，需要监听一个总的状态
 * 2.种虫的话，
 * 2.
*/

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    PixelRatio,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';

import {
    ViroSceneNavigator,
    ViroARSceneNavigator
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
import ARSceneSelectPage from './ARSceneSelectPage'; //种虫的AR页面
import ARSceneCatchPage from './ARSceneCatchPage'; //捉虫的AR页面
import { styles, sharedProps, gameList } from '../util/Constants';
import Icon1 from 'react-native-vector-icons/Feather'
import Modal from 'react-native-modal'
export default class ARManagerPage extends Component {
    constructor(props, ctx) {
        super(props, ctx);
        this.renderSelectContent = this.renderSelectContent.bind(this);

        this.renderArContent = this.renderArContent.bind(this);
        this.renderCatchContent = this.renderCatchContent.bind(this);

        this.onCatchExit = this.onCatchExit.bind(this);
        this.onSelectExit = this.onSelectExit.bind(this);
        this.onConfuirmSelect = this.onConfuirmSelect.bind(this);
        this.renderUiControlTop = this.renderUiControlTop.bind(this);
        this.renderUiControlBottom = this.renderUiControlBottom.bind(this);
        this.renderUiControlUiCenter = this.renderUiControlUiCenter.bind(this);
        this.renderImageList = this.renderImageList.bind(this);
        this.state = {
            openModalView: false,
            gameList: gameList,
            isVisiable: true,

        }


    }

    render() {
        //在这个函数里面，需要根据params传进来的type决定渲染什么页面（种虫还是捉虫）
        const { arType } = this.props.navigation.state.params;

        if (arType == 0) {
            return (
                <View style={styles.arContainer}>
                    <View style={styles.arScene}>
                        <ViroARSceneNavigator {...sharedProps} viroAppProps={{ ...this.props }} initialScene={{ scene: ARSceneSelectPage }} />
                    </View>
                    <View style={styles.uiControl_select_Header}>
                        <View style={styles.uiControl_header_quitButton}>
                            <Button onPress={this.onSelectExit} transparent ><Icon name="md-close" style={styles.uiControl_header_quitButton_icon}></Icon></Button>
                        </View>
                        <View style={styles.uiControl_header_sureButton}>
                            <Button onPress={this.onConfuirmSelect} transparent ><Icon1 name="check" style={styles.uiControl_header_quitButton_icon}></Icon1></Button>
                        </View>
                    </View>
                    <ScrollView style={styles.uiControl_select_GameImgView} horizontal={true}>
                        {
                            this.renderImageList() //渲染底下的那个列表
                        }
                    </ScrollView>
                    <Modal isVisible={this.state.openModalView}
                        onBackButtonPress={() => { this.setState({ openModalView: false }) }}
                        onBackdropPress={() => { this.setState({ openModalView: false }) }}
                        style={styles.modalStyles}
                    >
                        <Container style={{ alignItems: "center" }}>
                            <Content><Text style={{ fontSize: 50, color: "#ffffff", alignItems: 'center', marginTop: "" }}>未选择游戏！</Text></Content>
                        </Container>
                    </Modal>
                </View>

            )
        } else {
            return (
                <View style={styles.arContainer}>
                    {this.renderArContent(arType)}
                    {this.renderUiControlTop(arType)}
                    {this.renderUiControlBottom(arType)}
                    {this.renderUiControlUiCenter(arType, this.state.openModalView)}
                </View>)


        }
        /*return (
            <View style={styles.arContainer}>
                {this.renderArContent(arType)}
                {this.renderUiControlTop(arType)}
                {this.renderUiControlBottom(arType)}
                {this.renderUiControlUiCenter(arType, this.state.openModalView)}
            </View>

        )*/

    }
    renderSelectContent() {
        //渲染AR的种虫场景
        return (
            <View style={styles.arScene}>
                <ViroARSceneNavigator {...sharedProps} viroAppProps={{ ...this.props }} initialScene={{ scene: ARSceneSelectPage }} />
            </View>
        );



    }
    renderCatchContent() {
        //渲染AR的捉虫场景
        return (
            <View style={styles.arScene}>
                <ViroARSceneNavigator {...sharedProps} viroAppProps={{ ...this.props }} initialScene={{ scene: ARSceneCatchPage }} />
            </View>
        );;

    }
    renderUiControlTop(type) {
        //渲染顶部
        if (type == 0) {
            return (
                <View style={styles.uiControl_select_Header}>
                    <View style={styles.uiControl_header_quitButton}>
                        <Button onPress={this.onSelectExit} transparent ><Icon name="md-close" style={styles.uiControl_header_quitButton_icon}></Icon></Button>
                    </View>
                    <View style={styles.uiControl_header_sureButton}>
                        <Button onPress={this.onConfuirmSelect} transparent ><Icon name="md-check" style={styles.uiControl_header_quitButton_icon}></Icon></Button>
                    </View>
                </View>


            );

        } else if (type == 1) {
            return (
                <View style={styles.uiControl_select_Header}>
                    <View style={styles.uiControl_header_quitButton}>
                        <Button onPress={this.onCatchExit} transparent ><Icon name="md-close" style={styles.uiControl_header_quitButton_icon}></Icon></Button>
                    </View>
                </View>


            );

        }

    }
    renderUiControlBottom(type) {
        //渲染的底部
        if (type == 0) {
            //是一个scollview
            return (
                <ScrollView style={styles.uiControl_select_GameImgView} horizontal={true}>
                    {
                        this.renderImageList() //渲染底下的那个列表
                    }
                </ScrollView>
            );
        } else {
            if (this.state.isVisiable == true) {
                return (
                    <TouchableOpacity onPress={() => { this.setState({ isVisiable: false }) }}>
                        <View style={styles.uiControl_catch_bottom} >
                            <Text>请点击物体!</Text>
                        </View>
                    </TouchableOpacity>
                );

            } else {
                return (null);
            }


        }


    }
    renderImageList() {
        const { index } = this.props.ar.select;//取出来index
        const { finishSelectArGame, changeIndex, pop } = this.props.actions;
        //   
        return this.state.gameList.map((item, ind) => {
            console.log("index:" + ind);
            console.log("item:");
            console.log(item)
            if (ind == index) {
                return (
                    <View style={styles.uiControl_select_GameImgList_item_hover} key={ind}>
                        <TouchableOpacity onPress={() => { if (ind != index) changeIndex(ind) }}>
                            <Image source={require('../resources/res/grid_bg.jpg')} />
                        </TouchableOpacity>

                    </View>);
            } else {
                //不加粗
                return (
                    <View style={styles.uiControl_select_GameImgList_item} key={ind}>
                        <TouchableOpacity onPress={() => { if (ind != index) changeIndex(ind) }}>
                            <Image source={require('../resources/res/grid_bg.jpg')} />
                        </TouchableOpacity>
                    </View>);
            }
        })
    }
    renderUiControlUiCenter(type, isVisible) {
        //渲染一些其他的东西，比如这个
        if (type == 0) {
            return (
                <Modal isVisible={this.state.openModalView}
                    onBackButtonPress={() => { this.setState({ openModalView: false }) }}
                    onBackdropPress={() => { this.setState({ openModalView: false }) }}
                    style={styles.modalStyles}
                >
                    <Container>
                        <Content><Text>未选择游戏！</Text></Content>
                    </Container>
                </Modal>
            );
        }

    }
    renderArContent(type) {
        if (type == 0) {
            //种虫
            return this.renderSelectContent();
        } else {
            return this.renderCatchContent();
        }


    }

    onExit(type) {
        if (type == 0) {
            this.onSelectExit();
        } else {
            this.onSelectExit();
        }
    }
    onCatchExit() {
        //捉虫退出
        const { finishSelectArGame, changeIndex, pop } = this.props.actions;

        pop();
    }
    onSelectExit() {
        //种虫退出
        const { finishSelectArGame, changeIndex, pop } = this.props.actions;

        finishSelectArGame({
            edited: false
        });
    }
    onConfuirmSelect() {
        //确定按钮点击
        console.log("this.props")
        const { index } = this.props.ar.select;//取出index
        console.log(this.props)
        const { finishSelectArGame, changeIndex, pop } = this.props.actions;

        if (index < 0) {
            //没有选
            this.setState({
                openModalView: true
            });
        } else {
            //完成编辑
            finishSelectArGame({
                edited: true
            });

        }


    }
}