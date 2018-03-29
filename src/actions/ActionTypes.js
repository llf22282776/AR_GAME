export const PUSH = "push";
export const POP = "pop";
export const RESET = "RESET";//登出的时候使用
export const GOBACK = "GOBACK";//
export const AR_GAME_SELECT_FINISH = "AR_GAME_SELECT_FINISH";//由AR路由组件调用，
export const AR_GAME_CATCH_FINISH = "AR_GAME_CATCH_FINISH" ;//由ar捉虫场景调用，里面要pop，然后返回一个action type为它，参数payload
//卧槽。。。。需要其他的action,因为controlUI 在其他组件！！！！！！！！！！！
export const AR_GAME_SELECT_CHOOSE_INDEX = "AR_GAME_SELECT_CHOOSE_INDEX" ;//用户修改了组件的index，实际上也是修改了游戏的类型.种虫的时候只是拨一下动画
