const reducer = (state, action) => {
  switch (action.type){
    case 'ADD_PRODUCT_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isLogged: true
      }
    default:
      return state;
  }
}

export default reducer;