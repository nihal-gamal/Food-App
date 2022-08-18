import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cartIsVisible :false
}

export const cartUiSlice = createSlice({
  name: 'cartUi',
  initialState,
	reducers :{
		toggle(state){
            state.cartIsVisible= !state.cartIsVisible
        }
	}

})
export const cartUiActions = cartUiSlice.actions

export default cartUiSlice.reducer