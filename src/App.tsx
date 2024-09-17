import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
  const isRootPath = window.location.pathname === '/';

  // Rest of your code...

  return (
    <>
      {
        isRootPath ? <></>
                   : 
                     <></>
    }
    </>
  );
}

export default App;
