import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button';
import TextField from './components/textField/TextField';

function App() {
  function logging(){
    console.log("click")
  }
  function loggingText(e){
    console.log("e", e)
  }
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button callback={logging} label="classifica"/>
        <TextField placeholder="placeholder" callback={loggingText}/>
      </header>
    </div>
  );
}

export default App;
