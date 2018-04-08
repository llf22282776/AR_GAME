


import { View, StyleSheet } from 'react-native'
export const sharedProps = {
    apiKey: "142365C9-3C5A-4250-AD1A-FD21C10322EB",
}
import {
    ViroMaterials,
    ViroAnimations

} from 'react-viro';
export const mapObject = function (obj) {
    //该函数遍历整个对象，返回所构成的字典
    let objArray = [];
    for (segment in obj) {
        if (typeof obj[segment] == Object) {
            let objArray1 = mapObject(obj[segment]);
            objArray.concat(objArray1);
        } else {
            objArray[segment] = obj[segment];//不是对象的就放进来
        }
    }
    return objArray;
}

export const styles = StyleSheet.create({
    middle_text: {
        paddingTop: 100,
        paddingBottom: 100,
    },//在这个style下，子组件居中
    arContainer: {
        //总的那个view
        flex: 1
    },
    arScene: {
        //ar所在的那个view
        flex: 1
    },
    modalStyles: {
        borderRadius: 5
    },
    uiControl_header_quitButton_icon: {
        color: "#ffffff",

        fontSize: 16
    },
    uiControl_header_quitButton: {

        left: 10,//全占
        flex: 1,


    },
    uiControl_header_sureButton: {
        position: 'absolute',
        right: 10,


    },

    uiControl_select_Header: {
        //种虫的顶部菜单显示所在的view,
        position: 'absolute',
        display: 'flex',
        backgroundColor: "#ffffff22",
        top: 10,//距顶部10,
        left: 10,//全占
        right: 10,
        height: 40,
        justifyContent: 'space-between'

    },
    uiControl_catch_bottom_game2: {
        //捉虫-底部-游戏2
        position: 'absolute',
        display: 'flex',
        backgroundColor: "#ffffff22",
        bottom: 200,//距顶部10,
        left: 10,//全占
        right: 10,
        height: 50,


    },
    uiControl_catch_bottom_game2_input: {

        backgroundColor: "#ffffff22",
        textDecorationColor: "#ffffff"

    },
    uiControl_catch_bottom_game2_button: {
        backgroundColor: "#ffffff22",
        fontSize: 50,
        textAlign: 'center',
        color:"#ffffff"
    },
    uiControl_catch_bottom_game1: {
        //捉虫-底部-游戏1
        position: 'absolute',
        display: 'flex',
        backgroundColor: "#ffffff22",
        bottom: 10,//距顶部10,
        left: 10,//全占
        right: 10,
        height: 40,
        justifyContent: 'center',

    },
    uiControl_catch_bottom_game1_text: {
        //文本提示
        color: "#ffffff",
        textAlign: 'center',
        paddingTop: 5
    },
    uiControl_select_GameImgList: {
        flexDirection: 'column',

    },
    uiControl_select_GameImgList_item: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        height: 100,
        width: 100,

    },
    uiControl_select_GameImgList_item_hover: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        height: 100,
        width: 100,
        borderColor: "#ffffff", borderRadius: 5, borderWidth: 2

    },

    imageItem: {
        flex: 1,
        height: 100,
        width: 100,
    },
    uiControl_select_GameImgView: {
        //用于显示底部图片缩略图的列表的
        position: 'absolute',
        backgroundColor: "#ffffff22",
        flexDirection: 'column',
        bottom: 10,//距底部10,
        left: 10,
        right: 10,
        height: 120,//

    },
    uiControl_catch_uiCenter_panel: { //中间放置
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        height: 500,

    },
    msg_button_content: {
        //放置消息的
        display: "flex",

        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: "flex-end",

    },

    button_icon_style: {
        //按钮组
        fontSize: 30,
        color: "#ffffff",
        alignSelf: "center"
    },
    button_style: {
        //按钮属性
        justifyContent: 'center',

        borderRadius: 50,
        padding: 20,
        height: 50,
        flex: 1,

    },
    content_text_view: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10
    },
    content_text: {
        //包含
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 100,
        marginTop: 100,

    }

})

export const route_name = {
    mainScene: "mainScene",
    arScene: "arScene"
}
export const gameList = [
    {
        overViewImage: require('../resources/res/grid_bg.jpg'),

    },
    {
        overViewImage: require('../resources/res/grid_bg.jpg'),
    }


]

ViroMaterials.createMaterials({
    grid: {
        lightingModel: "Blinn",
        diffuseTexture: require('../resources/res/grid_bg.jpg'),
    },
});
ViroAnimations.registerAnimations({
    animateObject: {
        properties: {

            rotateX: "90"

        },
        easing: "Bounce",
        duration: 5000
    },
});

