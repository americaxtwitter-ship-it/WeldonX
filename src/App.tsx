import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import BotsSection from "./components/BotsSection";
import DesktopSection from "./components/DesktopSection";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-base text-white antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <BotsSection />
        <DesktopSection />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
