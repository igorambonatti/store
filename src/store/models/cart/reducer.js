import produce from 'immer';

const INITIAL_STATE = {
  cart: [],
};
export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_PRODUCT':
      return produce(state, draft => {
        draft.cart = action.info;
        // eslint-disable-next-line no-console
        console.log(action);
      });

    default:
      return state;
  }
}
