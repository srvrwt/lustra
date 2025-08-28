import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import OurCurriculum from "./components/OurCurriculum";
import WhyChooseUs from "./components/WhyChooseUs";
import Badges from "./components/Badges";
import SafeSpace from "./components/SafeSpace";
import Pricing from "./components/Pricing";
import Resource from "./components/Resource";
import Newsletter from "./components/Newsletter";

// Import global styles
import "./styles/fonts.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <OurCurriculum />
        <WhyChooseUs />
        <Badges />
        <SafeSpace />
        <Pricing />
        <Resource />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
