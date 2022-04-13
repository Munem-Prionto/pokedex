
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter  , Routes , Route} from 'react-router-dom';
import Pokemon from './Pages/Pokemon';
import ErrPage from './Pages/ErrPage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/pokemon/:id' element={<Pokemon/>}></Route>
          <Route path='*' element={<ErrPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
