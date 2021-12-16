import "./App.css";
import Navbar from "./components/parts/Navbar";
import Footer from "./components/parts/Footer";
import Facility from "./components/Facility";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Review from "./components/Review";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Featured />
      <Review />
      <Facility />
      <Footer />
    </>
  );
}

export default App;
