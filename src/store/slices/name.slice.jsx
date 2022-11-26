import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const nameSlice = createSlice({
		name: 'name',
    initialState: "",
    reducers: {
      nameTrainer : (state,action)=>{
        const name= action.payload
        return name
      }
        
    }
})

export const { nameTrainer} = nameSlice.actions;

export default nameSlice.reducer;