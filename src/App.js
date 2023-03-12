
import './App.css';
import Counter from './counter';
import{ useDispatch,useSelector}from "react-redux"
import{themess}from "./store/index"


function App() {
  const theme=useSelector((state)=>state.themes.value)
  const dispatch=useDispatch();
  const themehandler=()=>{
    dispatch(themess.themechange())

  }
  return (
    <div className={theme?'main':"main1"}>
      <Counter />
      <button onClick={themehandler}>theme</button>
    </div>
  );
}

export default App;
