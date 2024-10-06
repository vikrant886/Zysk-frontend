import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import { Blog } from "./components/sections/Blog";
import Cta from "./components/sections/Cta";
import FAQ from "./components/sections/Faq";
import Features from "./components/sections/Features";
import FeatureTwo from "./components/sections/FeatureTwo";
import Section_one from "./components/sections/Section_one";
import SocialProof from "./components/sections/SocialProof";

function App() {
  return (
    <div>
      <Header/>
      <Section_one/>
      <SocialProof/>
      <Features/>
      <FeatureTwo/>
      <FAQ/>
      <Blog/>
      <Cta/>
      <Footer/>
    </div>
  );
}

export default App;
