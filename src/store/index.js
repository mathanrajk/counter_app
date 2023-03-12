// import{ createStore} from "redux";


// const counterReducer=(state={counter:0} ,action)=>{
//     if(action.type==="increment"){
//         return{counter:state.counter+1}
//     }
//     if(action.type==="decrement"){
//         return{counter:state.counter-1}
//     }
//     if(action.type==="incrementten"){
//         return{counter:state.counter+action.addvalue}
//     }
//     return  state; 

// }
import { createSlice, configureStore } from "@reduxjs/toolkit"
const counterReducer = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;

        },

        incrementten: (state, action ) => {
            state.value  += action.payload
        },
    },


})
const themes=createSlice({
    name:"themes",
    initialState:{value:true},
    reducers:{
        themechange:(state)=>{
            state.value=!state.value

        }
    }

})
export const actionss = counterReducer.actions;
export const themess =themes.actions
//const store = createStore(counterReducer);
const store = configureStore({ reducer: {
    counter:counterReducer.reducer,
    themes:themes.reducer

}})

export default store;