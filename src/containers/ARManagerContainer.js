'use stric';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ARManagerPage from '../components/ARManagerPage'
import { pop, push, reset } from "../actions/NavigatorAction";
import { finishSelectArGame, changeIndex, exitCatchArGame, changeGameState, finishCatchArGame, submitGameFinishState } from "../actions/ARAction";
export default ARManagerContainer = connect(
    (state) => (Object.assign({
        ar: state.ar
    })),
    (dispatch) => {
        return Object.assign({ dispatch: dispatch },
            {
                actions:
                bindActionCreators(
                    {
                        pop,
                        push,
                        reset,
                        finishSelectArGame,
                        changeIndex, exitCatchArGame,
                        changeGameState,
                        finishCatchArGame,
                        submitGameFinishState
                    }, dispatch)
            });
    }
)(ARManagerPage);