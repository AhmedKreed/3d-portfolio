import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Contact,
} from "../components";
const Home = () => (
  <>
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Contact />
  </>
);

export default Home;
