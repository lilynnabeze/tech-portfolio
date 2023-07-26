import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills"
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact"
import Footer from "./Footer/Footer";
import Layout from "./Layout";



export default function PortfolioWebsite() {
  return (
    <div>
      <Layout>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </Layout>
    </div>
  );
}
