import React, { useReducer } from 'react';

import alertContext from './alertContext';
import AlertReducer from './alertReducer';

import {
   SET_ALERT,
   REMOVE_ALERT

} from '../types';

const AlertState = props => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);
   
    // setAlert

    const setAlert = (msg,type) =>{
        dispatch({
            type: SET_ALERT,
            payload: {msg, type}
        })
        setTimeout(()=>dispatch({type: REMOVE_ALERT}),5000);
      };
    

    return <alertContext.Provider
        value ={{
            alert: state,
            setAlert
           
        }}
    >
        {props.children}
    </alertContext.Provider>
}

export default AlertState;