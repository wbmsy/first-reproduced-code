import "./App.css";
import Header from "./components/Header.tsx";
import About from "./components/About.tsx";
import Bicycle from "./components/Bicycle.tsx";
import Footer from "./components/Footer.tsx";
import mainvisual from "./assets/images/main-visual.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="main-visual">
          <img src={mainvisual} alt="main visual" />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="bicycle">
          <Bicycle />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
