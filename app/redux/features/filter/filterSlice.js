import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  filters: { status: false, brands: [] },
  keyword: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterProduct: (state, action) => {
      if (!state.filters.brands.includes(action.payload)) {
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: [...state.filters.brands, action.payload],
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: state.filters.brands.filter(
              (brand) => brand !== action.payload
            ),
          },
        };
      }
    },
  },
});

export const { filterProduct } = filterSlice.actions;

export default filterSlice.reducer;
