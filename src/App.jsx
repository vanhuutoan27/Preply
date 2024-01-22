import { Route, Routes } from 'react-router-dom';

import RootLayout from './_root/RootLayout';
import { Home } from './_root/pages/index';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
