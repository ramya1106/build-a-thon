import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import MarqueeSeparator from "./components/MarqueeSeparator";
import CountdownTimer from "./components/CountdownTimer";
import Ticketing from "./components/Ticketing";
import Themes from "./components/Themes";
import Prizes from "./components/Prizes";
import Team from "./components/Team";
import Rules from "./components/Rules";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <section id="about"><Hero /></section>

      <MarqueeSeparator text="★ BUILD-A-THON" />

      <section id="countdown"><CountdownTimer /></section>

      <MarqueeSeparator text="★ REGISTER NOW" />

      <section id="registration"><Ticketing /></section>

      <MarqueeSeparator text="★ THEMES" />

      <section id="themes"><Themes /></section>

      <MarqueeSeparator text="★ PRIZES" />

      <section id="prizes"><Prizes /></section>

      <MarqueeSeparator text="★ OUR TEAM" />

      <section id="team"><Team /></section>

      <MarqueeSeparator text="★ RULES" />

      <section id="rules"><Rules /></section>

      <Footer />
    </>
  );
}

export default App;
