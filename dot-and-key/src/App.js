import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Header/Navbar";
import { LoginCard } from "./LoginPage/Loginpage";
import { SignupCard } from "./Signup/SignupPage";
// import { Produtdummy } from "./PRODUCTS/Produtrdummy";
import LandingPage from "./pages/LangingPage/LandingPage";
import { ProductsDetailPage } from "./pages/ProductsDetailPage/ProductsDetailPage";
import {
  Bodycare,
  Haircare,
  Moisturizer,
  Neutrition,
  Serum,
} from "./PRODUCTS/AllSkincareProducts";
import { Card } from "./pages/CartPage/CartPage";

function App() {
  return (
    <Box className="App">
      <Box>
        <Navbar />
      </Box>
      <Box>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<LoginCard />} />
          <Route path="/signup" element={<SignupCard />} />
          <Route path="/card" element={<Card />} />
          <Route path="/skincare/bodycare" element={<Bodycare />} />
          <Route path="/skincare/haircare" element={<Haircare />} />
          <Route path="/skincare/neutrition" element={<Neutrition />} />
          <Route path="/skincare/serum" element={<Serum />} />{" "}
          <Route path="/skincare/neutrition" element={<Neutrition />} />
          <Route path="/skincare/moisturizer" element={<Moisturizer />} />
          <Route path="/skincare/:id" element={<ProductsDetailPage />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
