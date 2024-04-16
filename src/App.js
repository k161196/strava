import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Callbak from "./Callbak";
import Form from "./Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/callback" element={<Callbak />}>
          <Route index element={<Callbak />} />
        </Route>
        <Route path="/form" element={<Form />}>
          <Route index element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
