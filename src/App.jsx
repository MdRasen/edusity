import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Title from "./components/title/Title";
import Programs from "./components/programs/Programs";
import About from "./components/about/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="OUR PROGRAMS" subtitle="What We Offer" />
        <Programs />
        <About />
      </div>
    </div>
  );
};

export default App;
