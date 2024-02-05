import logo from './logo.svg';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import { Header, Footer } from './Containers'; 

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
