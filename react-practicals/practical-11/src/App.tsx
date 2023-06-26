import CProp from './Props/ClassBased/CProp';
import FProp from './Props/FunctionalBased/FProp';

function App() {
  return (
    <>
      <div className="App">Hello from App</div>
      <CProp name="Bruce wayne" age={3} />
      <FProp name="Peter Parker" age={28} />
    </>
  );
}

export default App;
