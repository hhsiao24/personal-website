import { useDisclosure } from "@mantine/hooks";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import ProjectsPage from "./components/ProjectsPage";
import { Contact } from "./components/Contact";
import { MantineProvider } from "@mantine/core";

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider>
      <div className="App">
        <Header opened={opened} toggle={toggle} />
        <Home />
        <Skills />
        <ProjectsPage />
        <Contact />
        <footer
          style={{
            bottom: 0,
            left: 0,
            width: "100%",
            textAlign: "center",
            backgroundColor: "#242424",
            padding: "10px 0",
          }}
        >
          Made with ♡ by Hannah Hsiao 2024
        </footer>
      </div>
    </MantineProvider>
  );
}

export default App;
