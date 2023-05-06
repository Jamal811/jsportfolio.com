import { useState } from "react";
import Skills from "./my skills";
import ContactForm from "./form";
import Footer from "./footer";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Services from "./Services";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Services />
        <Skills />
        <Portfolio />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}
