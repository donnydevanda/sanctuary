import "./App.css";
import Facility from "./components/Facility";
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
      <Facility />
    </>
  );
}

export default App;
