import React from "react";
import{ useSelector,useDispatch} from "react-redux"
import{actionss}from "./store/index"
import{themess}from "./store/index"
import './counter.css'


const Counter=()=>{

const counter =useSelector((state)=>state.counter.value);
const dispatch =useDispatch();
const theme=useSelector((state)=>state.themes.value)
const incrementhandler=()=>{
    dispatch(actionss.increment())

}
const decrementhandler=()=>{
    dispatch(actionss.decrement())
    
}
const incrementten=()=>{
    dispatch(actionss.incrementten(10))
    
}
    return(
        <div className={theme?"card":"card1"}>
            <p>counter: {counter}</p>
            <div    >
            <button onClick={incrementhandler}>Increase</button>
            <button onClick={decrementhandler}>Decrease</button>
            <button onClick={incrementten}>Increase + 5</button>
</div>
             
        </div>
    )
}
export default Counter;