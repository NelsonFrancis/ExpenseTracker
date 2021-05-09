import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import Transactions from './components/Transactions';
import {GlobalContext} from './context/InitialState';

function App() {
  return (
    <GlobalContext>
      <div className="container">
        <Header />
        <Balance />
        <Transactions />
        <AddTransaction />
      </div>
    </GlobalContext>
  );
}

export default App;
