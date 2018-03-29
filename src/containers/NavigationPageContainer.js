'use stric';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import AppNavigator from '../components/NavigationPage';
import {pop,push,reset} from "../actions/NavigatorAction";



export default  NavigationContainer = connect(
    (state)=>(Object.assign({
        navigator:state.navigator
    })),    
    (dispatch) => {
        return Object.assign({dispatch: dispatch},{actions: bindActionCreators({pop,push,reset}, dispatch)});
    }
)(AppNavigator);