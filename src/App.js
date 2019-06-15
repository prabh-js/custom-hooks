import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import useToggleState from './useToggleState';
function App() {
  let inputRef = React.createRef();
  const [value, setValue] = useState("Prabhjot");
  const [editorVisible, setEditorVisible] = useToggleState(false)
  
  useEffect(()=>{
    inputRef.current && inputRef.current.focus();
  })
  return (
    <div className="App">
      <header className="App-header">
      { editorVisible ?
      (
       <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} ref={inputRef}/>
       
      )
       : (<span>{value}</span>)
       }
       <button onClick={setEditorVisible}>{editorVisible ? 'Done':'Edit'}</button>
      </header>
    </div>
  );
}

export default App;
