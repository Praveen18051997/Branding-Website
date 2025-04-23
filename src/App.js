import "./App.css";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Choose from "./Components/Choose";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Services />
      <Choose />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;