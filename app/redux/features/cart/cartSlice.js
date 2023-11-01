import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      console.log(state, payload);
      const existingCartItem = payload.cartItems.find(
        (cartItem) => cartItem._id === payload.product._id
      );
      if (existingCartItem) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem._id === payload.product._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        state.cartItems = [
          ...state.cartItems,
          { ...payload.product, quantity: 1 },
        ];
        console.log("current cart items:", state.cartItems);
      }
    },

    removeItemFromCart: (state, { payload }) => {
      console.log(state, payload);
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem._id === payload.product._id
      );
      if (existingCartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem._id !== payload.product._id
        );
      }
      state.cartItems = state.cartItems.map((cartItem) =>
        cartItem._id === payload.product._id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    },

    clearItemFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== payload.product._id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },

    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
  },
});

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  setIsCartOpen,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cart: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const existingCartItem = state.cart.find(
//         (cartItem) => cartItem.id === action.payload.product.id
//       );
//       if (existingCartItem) {
//         state.cart = state.cart.map((cartItem) =>
//           cartItem.id === action.payload.product.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         );
//       } else {
//         state.cart = [
//           ...state.cart,
//           { ...action.payload.product, quantity: 1 },
//         ];
//         console.log("current cart items:", state.cart);
//       }
//       // const selectedProoduct = state.cart.find(
//       //   (product) => product._id = action.payload._id
//       // );
//       // console.log(selectedProoduct);
//       // if (!selectedProoduct) {
//       //   const product = { ...action.payload, quantity: 1 };
//       //   state.cart.push(product);
//       // } else {
//       //   selectedProoduct.quantity += 1;
//       //   state.cart
//       //     .filter((product) => product._id = selectedProoduct._id)
//       //     .push(selectedProoduct);
//       // }
//     },
//   },
// });

// export const { addToCart } = cartSlice.actions;

// export default cartSlice.reducer;
