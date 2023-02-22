import { createContext } from 'react';
import './App.css';
import ComponentA from './components/ComponentA'
import FetchApiData from './components/FetchApiData'

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <div className="App">
      <h1>React Context</h1>
      <FirstName.Provider value={'Chaman'}>
        <LastName.Provider value={"Gupta"}>
          <ComponentA />
        </LastName.Provider>
      </FirstName.Provider>

      <FetchApiData />
    </div>
  );
}

export default App;
export { FirstName, LastName }
