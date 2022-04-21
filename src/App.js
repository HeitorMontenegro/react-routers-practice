import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
 
const App = () => {
  return (
    <div>
      <h1>React Routers Practice!</h1>

      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/contact">Contact</Link>
        <Routes>
          <Route path="/" element={<Page1/>} authed={true}/>
          <Route path="/users" element={<Page2/>} />
          <Route path="/contact" element={<Page3/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
