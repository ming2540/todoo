import { VisibilityFilters, setVisibilityFilter } from "../actions/index";
import {handleActions} from 'redux-actions'

// const visibilityFilters = (state  = VisibilityFilters.SHOW_ALL , action) => {
//     if(action.type == 'SET_VISIBILITY_FILTER'){
//         return action.filter
//     }
//     return state
// }


const visibilityFilters = handleActions({
    [setVisibilityFilter](state,action){
        return action.payload.filter
    }
}, VisibilityFilters.SHOW_ALL)

export default visibilityFilters;