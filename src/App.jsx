import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Title from "./components/title/Title";
import Programs from "./components/programs/Programs";
import About from "./components/about/About";
import Campus from "./components/campus/Campus";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="OUR PROGRAMS" subtitle="What We Offer" />
        <Programs />
        <About />
        <Title title="Gallery" subtitle="Campus Photos" />
        <Campus />
      </div>
    </div>
  );
};

export default App;
