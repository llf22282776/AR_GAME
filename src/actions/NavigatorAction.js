

import * as types from '../actions/ActionTypes'

export const push = function (routeName,params){
    return {
        type:types.PUSH,
        payload:{
            key:routeName,
            params:params
        }

    }
}

export const pop = function (){
    return {
        type:types.POP,
        payload:{
        }
    }
}

export const reset = function(){ // 登出时候出现
    return {
        type:types.RESET,
        payload:{}
    }
}
export const goBack =function (routeName){

    return {
        type:types.GOBACK,
        payload:{
            routeName:routeName,
        }

    }

}
