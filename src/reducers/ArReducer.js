

import * as types from '../actions/ActionTypes'
/**
 * 
 * 由AR管理界面接受，初始化属性如下
 * 
 * 
*/
const init_state = {
    arType: 0,//0中 1捉

    catch: { //捉
        //游戏1 
        times: 3, //三次游戏
        start: 0,//游戏是否开始 0 没有，1 开始,-1 结束
        success: 0,//没有成功,游戏成功后，自动跳转
        
    },
    select: { //种
        edited: false,//是否编辑完成，编辑完成设置为处
        index: 0,//inde从0开,每个index对应一个游戏类型！！！！！！！！！！！
    }
    //里面场景需要的
}

export default function ArReducer(state = init_state, action = {}) {
    //从种虫界面
    switch (action.type) {

        case types.AR_GAME_SELECT_CHOOSE_INDEX: {
            //更改了index（游戏类型）
            let newState = {
                ...state,
                select: {
                    ...state.select,
                    index: action.payload.index,
                }
            }
            return newState;
        }
        case types.AR_GAME_SELECT_FINISH: {
            //这个action需要修改一下edited属性就行了,点击了确定或者返回，监听这个属性的是别的页面
            let newState = {
                ...state,
                select: {
                    ...state.select,
                    edited: action.payload.edited,
                }
            }
            return newState;
        }
        //捉虫===================================
        //捉虫-初始化
        case types.AR_GAME_CATCH_INIT: {
            let newState = {
                ...state,
                catch: {
                    ...init_state.catch,//初始化一下
                }
            }
            return newState;
        }

        //捉虫-状态变更
        case types.AR_GAME_CATCH_CHANGE: {
            let newState = {
                ...state,
                catch: {
                    ...action.payload,//
                }
            }
            return newState;
        }
        default: {
            return state;
        }

    }



}