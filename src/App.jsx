import Banner from "./components/Banner"; // import Banner component
import Nav from "./components/Nav"; //import Nav component
import Services from "./components/Services"; //import Services component
import Work from "./components/Work"; //import Work component
import Contact from "./components/Contact"; //import Contact component
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className=" overflow-hidden">
      <Banner />
      <Nav />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
