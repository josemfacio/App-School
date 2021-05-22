import React,{useReducer} from 'react';

import firebase from '../../firebase'
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';
import {CONSULTAR_DATOS} from '../../types';
import _ from 'lodash';

const FirebaseState= props =>{

    //console.log(firebase);
    const initialState={
        menu:[]
    }

    
    const [state,dispatch]= useReducer(FirebaseReducer,initialState);

    //fuincion para traer los pedidos
    const obtener_productos=()=>{
        
        firebase.db.collection('productos')
        .where('existencia','==', true)//trae solo los que estan con true
        .onSnapshot(manejarSpanpshot);
        function manejarSpanpshot(snapchot){
            let platillos=snapchot.docs.map(doc =>{
                return{
                    id: doc.id,
                    ...doc.data()
                }
            });
            //ordenar platillos
            platillos=_.sortBy(platillos,'categoria');
            dispatch({
                type:CONSULTAR_DATOS,
                payload: platillos
            });
        }
    }
    return(
        <FirebaseContext.Provider
        value={{
            menu: state.menu,
            firebase,
            obtener_productos
        }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}
export default FirebaseState;