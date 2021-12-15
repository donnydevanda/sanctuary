import "./App.css";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Review from "./components/Review";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Featured />
      <Review />
    </>
  );
}

export default App;
