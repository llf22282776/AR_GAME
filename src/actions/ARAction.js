import * as types from '../actions/ActionTypes'
import { push, pop } from './NavigatorAction'

export const changeIndex = function (index) {
    //改变游戏索引
    return {
        type: types.AR_GAME_SELECT_CHOOSE_INDEX,
        payload: {
            index: index
        }
    }

}
export const finishSelectArGameEdit = function (edit) {
    //改变游戏索引
    return {
        type: types.AR_GAME_SELECT_FINISH,
        payload: {
            edited: edit.edited
        }
    }

}
export const changeGameState = function (opt) {
    //改变游戏状态,需不需要游戏完成的事件？，我觉得不需要,这个事件就够了，然后该监听监听
    //第一次是改start ,之后修改times和success就ok
    return {
        type: types.AR_GAME_CATCH_CHANGE,
        payload: {
            ...opt,//吧opt全部传过去,都放到ar.catch里面去
        }
    }
}

export const exitCatchArGame = function (opt) {
    //终止ar游戏时调用
    return (dispatch) => {

        //1.修改游戏状态(buxytao)

        //2.发起网络交互

        //3.先调用pop
        dispatch(pop());

    }

}
export const submitGameFinishState = function (opt) {
    //网络交互


}

export const trunToCatchPage = function (routeName, payload) {

    return (dispatch) => {

        //1.修改游戏状态(初始化)
        dispatch(changeGameState({
            times: 3, //三次游戏
            start: 0,//游戏是否开始 0 没有，1 开始,-1 结束
            success: 0,//没有成功,游戏成功后，自动跳转  
        }));


        //2.再去push，进行跳转
        dispatch(push(routeName, payload));
    }


}
export const finishCatchArGame = function (opt) {
    //完成ar游戏时调用,点击那个panel的时候
    return (dispatch) => {

        //1.修改游戏状态(不需要)

        //2.发起网络交互

        //3.先调用pop
        dispatch(pop());
    }

}
export const finishSelectArGame = function (edit) {
    //终止或完成ar游戏时调用
    return (dispatch) => {

        //2.然后返回
        dispatch(finishSelectArGameEdit(edit))
        //1.先调用pop
        dispatch(pop());
    }

}
