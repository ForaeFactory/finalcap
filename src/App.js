import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
