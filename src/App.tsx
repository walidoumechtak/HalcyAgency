import './App.css';


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
