import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import PaginaPrincipal from "./components/pages/PaginaPrincipal/PaginaPrincipal";
import Sorteio from "./components/pages/Sorteio/Sorteio";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/sorteio" element={<Sorteio />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App;
