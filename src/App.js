import logo from './logo.svg';
import './App.scss';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

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
