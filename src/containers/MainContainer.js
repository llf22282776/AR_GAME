'use stric';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import MainScenePage from '../components/MainScenePage';
import {pop,push,reset} from "../actions/NavigatorAction";
import {trunToCatchPage} from '../actions/ARAction'
export default  MainContainer = connect(
    (state)=>(Object.assign({
        ar:state.ar
    })),    
    (dispatch) => {
        return Object.assign({dispatch: dispatch},{actions: bindActionCreators({pop,push,reset,trunToCatchPage}, dispatch)});
    }
)(MainScenePage);