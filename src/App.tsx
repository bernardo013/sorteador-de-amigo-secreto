import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import PaginaPrincipal from "./components/Pagina/PaginaPrincipal";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App;
