import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import ProjectsPage from "./components/ProjectsPage";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import { MantineProvider } from "@mantine/core";
import HeroBullets from "./components/HomePage";

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider>
      <div className="App">
        <Header opened={opened} toggle={toggle} />
        <HeroBullets />
        <Skills />
        <ProjectsPage />
        <Contact />
        <Footer colorScheme={"dark"} />
      </div>
    </MantineProvider>
  );
}

export default App;
