import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Frontend/Pages/Home";
import Products from "./Frontend/Pages/Products";
import Snackbar from "./Frontend/Utility/components/Snackbar";
import { useSnackBar } from "./Frontend/Context/SnackMessage";
import Cart from "./Frontend/Pages/Cart";

function App() {
  const { message } = useSnackBar();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {message && <Snackbar />}
    </div>
  );
}

export default App;
