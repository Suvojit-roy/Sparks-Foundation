import "./App.css";
import Navbar from './Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from "./Mainscreens/Home";
import CustomerList from './Mainscreens/CustomerList'
import SendMoney from './Mainscreens/SendMoney'
import Transanctions from "./Mainscreens/Transactions";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <main>
          <Route path='/' exact component={Home}></Route>
          <Route path='/customer' exact component={CustomerList}></Route>
          <Route path='/transactions' exact component={Transanctions}></Route>
          <Route path='/sendmoney' exact component={SendMoney}></Route>
          <Route path='/sendmoney/:id' exact component={SendMoney}></Route>
          <Route path="/sendmoney/:id/:secondid"></Route>
          
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
