import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Numero from './pages/Numero';
import Palabra from './pages/Palabra';
import './Componentes/Router.css'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:valor' element={<Numero />} />
          <Route path='/:valor/:color/:backgroundColor' element={<Palabra />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;