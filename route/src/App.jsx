import Fev from "./component/Fev";
import Movie from "./component/Movie";
import NavBar from "./component/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./component/NotFound";
import Todos from "./component/Todos";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Movie></Movie>
              </>
            }
          ></Route>
          <Route
            path="/fev"
            element={
              <>
                <Fev></Fev>
              </>
            }
          ></Route>
          
          <Route
            path="/todo"
            element={
              <>
              <Todos></Todos>
              </>
            }
          ></Route>

          <Route
            path="*"
            element={
              <>
              <NotFound></NotFound>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
