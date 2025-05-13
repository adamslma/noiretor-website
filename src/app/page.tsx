import About from "./components/About";
import ContactCTA from "./components/ContactCTA";
import Hero from "./components/Hero";
import Localisation from "./components/Localisation";
import Menu from "./components/Menu";
import WineList from "./components/WineList";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Menu/>
      <WineList/>
      <Localisation/>
      <ContactCTA/>
    </main>
  );
}
