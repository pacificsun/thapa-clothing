import { TOGGLE_CARD_HIDDEN, ADD_ITEM } from './cart.types';
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CARD_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_ITEM:
      return {
        ...state, // spread state value
        cartItems: [...state.cartItems, action.payload] // spread all of the array value
      };
    default:
      return state;
  }
};

export default cartReducer;
