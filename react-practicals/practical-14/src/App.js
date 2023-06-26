import './App.css';
import First from './components/First';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      Hello, World!
      {props.name}
      <First>
        <h1>Sami How are you</h1>
      </First>
    </div>
  );
}

export default App;
