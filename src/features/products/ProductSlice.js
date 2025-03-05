import { createSlice } from "@reduxjs/toolkit";
import products from "../../productContents";

const initialState = {
    products:products,
    filteredProducts:products,
    searchItems:'',
    selectedCategory:"all",
};


const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        filteredSearchProducts:(state=initialState,action)=>{
            state.searchItems = action.payload;
            state.filteredProducts = state.products.filter(product=>
                product.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
            );
        },
        filteredCategoryWise:(state=initialState,action)=>{
            state.selectedCategory = action.payload.toLocaleLowerCase();
            state.filteredProducts = state.products.filter(product=>
                action.payload.toLocaleLowerCase() === 'all' ? true : product.category.toLocaleLowerCase() === action.payload.toLocaleLowerCase()
            )
        }
    }
});


export const {filteredSearchProducts , filteredCategoryWise} = productSlice.actions;
export default productSlice.reducer;