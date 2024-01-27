import './App.css';
import Calculadora from './components/Calculadora';
import ImagenPrincipal from './components/ImagenPrincipal';

function App() {
  return (
    <div className="App" basename="calculadora-react">
      <ImagenPrincipal />
      <Calculadora />
    </div>
  );
}

export default App;
