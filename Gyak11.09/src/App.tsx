import { useState } from 'react'
import RajzfilmLista from "./components/RajzfilmLista";


function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Rajzfilmek</h1>
      <RajzfilmLista />
    </div>
  );
}

export default App;