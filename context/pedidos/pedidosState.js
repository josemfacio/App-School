import React,{useReducer} from 'react';

import PedidosReduce from './pedidosReduce';
import PedidoContext from './pedidosContext';

const PedidosState= props =>{

    const initialState={
        pedido: []
    }

    
    const [state,dispatch]= useReducer(PedidosReduce,initialState);

    return(
        <PedidoContext.Provider
        value={{
            pedido: state.pedido
        }}
        >
            {props.children}
        </PedidoContext.Provider>
    )
}
export default PedidosState;