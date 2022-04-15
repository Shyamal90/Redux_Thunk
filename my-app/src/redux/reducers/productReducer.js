import {ActionTypes} from '../actionsTypes/actionTypes'

const initialState = {
    products : []
}


export const productReducer = (state = initialState , action) => {
    switch(action.type)
    {
        case  ActionTypes.SET_PRODUCTS: return {
            
            products : [...action.payload]
        }

        case  ActionTypes.FETCH_PRODUCTS: return {
            
            products : [...action.payload]
        }



        default : return state;
    }
}








export const selectedProductReducer = (state = {} , action) => {
    switch(action.type)
    {
        case ActionTypes.SELECTED_PRODUCT : return {
            ...state,
            ...action.payload
        }

        case ActionTypes.REMOVE_SELECTED_PRODUCT : return {
            
        }

        default : return state;
    }
}