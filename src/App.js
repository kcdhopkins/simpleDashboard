import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header'
import Routes from './navigation/Routes';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
          <Header/>
          <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
