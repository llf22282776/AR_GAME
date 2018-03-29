import * as types from '../actions/ActionTypes'
import { pop } from './NavigatorAction'

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
export const finishSelectArGame = function (edit) {
    //终止或完成ar游戏时调用
    return (dispatch) => {
        //1.先调用pop
        dispatch(pop());
        //2.然后返回
        dispatch(finishSelectArGameEdit(edit))
    }

}
