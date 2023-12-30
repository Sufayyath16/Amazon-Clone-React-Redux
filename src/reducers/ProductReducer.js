import { ActionTypes } from "../actions/ActionTypes";

const {SET_PRODUCTS,SELECTED_PRODUCT,SET_PROD_SEARCH_TEXT,SET_DEPARTMENT}= ActionTypes;

const initialState= {
    productList: [],
}
export const ProductReducer = (state = initialState,action)=>{
    switch(action.type){
        case SET_PRODUCTS:
            console.log("Reached in productreducer");
            const newState= {
                ...state,
                productList : action.payload,
            }

        
            console.log("product reducer",newState);
            return newState;

            case SET_PROD_SEARCH_TEXT:
                return{
                    ...state,
                    searchText: action.payload,
                };

            case SELECTED_PRODUCT:
        return{
          ...state,
          productId:action.payload
        }

        case SET_DEPARTMENT:
            return{
                ...state,
                dept: action.payload,
            }

            default:
                return state;
                break;

    }
}