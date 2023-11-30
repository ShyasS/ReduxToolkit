import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";

const userSlice  = createSlice({
    name : "users",
    initialState :userList,
    reducers:{
       addUser : (state,action) =>{
         state.push(action.payload)
       },
       updateUser : (state,action) =>{
        const {id,name,email} = action.payload;
        const UserUpdate = state.find(user => user.id == id)
        if(UserUpdate){
            UserUpdate.name = name;
            UserUpdate.email = email;
            
        } 
       },
       deleteUser : (state,action) =>{
          const {id} = action.payload;
          const UserDelete = state.find(user => user.id == id)
          if(UserDelete){
             return state.filter(f => f.id !== id)
          }
       }
    }
})
export const {addUser,updateUser,deleteUser} = userSlice.actions;
export default userSlice.reducer;