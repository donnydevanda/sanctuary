import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/parts/Navbar";
import Footer from "./components/parts/Footer";
import Facility from "./components/Facility";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Review from "./components/Review";

function App() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await axios.get(
        "https://sanctuary-server.herokuapp.com/products"
      );
      setProducts(response.data);
    } catch (error) {}
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Featured products={products} />
      <Review />
      <Facility />
      <Footer />
    </>
  );
}

export default App;
