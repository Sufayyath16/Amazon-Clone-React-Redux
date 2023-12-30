import {ActionTypes} from "./ActionTypes"

const{
    SET_PRODUCTS,
    SELECTED_PRODUCT,
    SET_PROD_SEARCH_TEXT,
    SET_DEPARTMENT,
    ADD_TO_CART,
    ADD_TO_WISHLIST,
    REMOVE_FROM_CART,
    REMOVE_FROM_WISHLIST,
}=ActionTypes

export const setProducts = (products)=>{
    return{
        type:SET_PRODUCTS,
        payload: products,

    };
};
export const setProdSearchText = (searchText)=>{
    return{
        type:SET_PROD_SEARCH_TEXT,
        payload: searchText,

    };
};
export const setSelectedProduct = (productId) => {
    return {
      type: SELECTED_PRODUCT,
      payload: productId,
    };
  };

  export const setDepartment = (dept) => {
    return {
      type: SET_DEPARTMENT,
      payload: dept,
    };
  };

  export const addToCart = (item) => {
    return {
      type: ADD_TO_CART,
      payload: item,
    };
  };

  export const addToWishList = (wish) => {
    return {
      type: ADD_TO_WISHLIST,
      payload: wish,
    };
  };

  export const removeFromCart = (remove) => {
    return {
      type: REMOVE_FROM_CART,
      payload: remove,
    };
  };

  export const removeFromWishList = (remove) => {
    return {
      type: REMOVE_FROM_WISHLIST,
      payload: remove,
    };
  };