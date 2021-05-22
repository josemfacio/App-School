import {CONSULTAR_DATOS} from '../../types'
export default(state,action)=>{
    switch(action.type){
        case CONSULTAR_DATOS:
            return{
                ...state,
                menu:action.payload
            }
        default:
            return state;
    }
}