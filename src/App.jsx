
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BaseFile from './pages/BaseFile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define the path and element */}
        <Route path="/" element={<BaseFile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
