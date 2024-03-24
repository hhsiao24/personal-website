import React, { useState } from "react";
import {
  useMantineColorScheme,
  useComputedColorScheme,
  Button,
} from "@mantine/core";
import { Container, Group, Burger } from "@mantine/core";
import classes from "./Header.module.css";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = ({ toggle, opened }: any) => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  const links = [
    { link: "/home", label: "Home" },
    { link: "/skills", label: "Skills" },
    { link: "/projects", label: "Projects" },
    { link: "/connect", label: "Connect" },
  ];

  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        if (link.link !== "/home") {
          const section = document.getElementById(link.link.substring(1));
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      style={{
        color: computedColorScheme === "dark" ? "#FFFFFF" : "#000000",
      }}
    >
      {link.label}
    </a>
  ));

  const githubButton = (
    <Button
      key="github"
      size="sm"
      variant="link"
      onClick={() => window.open("https://github.com/hhsiao24", "_blank")}
      className={`${classes.websiteButton}`}
      style={{
        width: 30,
        height: 30,
        padding: 0,
        backgroundColor: computedColorScheme === "dark" ? "#000000" : "#FFFFFF",
        color: computedColorScheme === "dark" ? "#FFFFFF" : "#000000",
      }}
    >
      <FaGithub style={{ width: "24px", height: "24px" }} />
    </Button>
  );

  const linkedInButton = (
    <Button
      key="linkedin"
      size="sm"
      variant="link"
      onClick={() =>
        window.open(
          "https://www.linkedin.com/in/hannah-hsiao-784845132/",
          "_blank"
        )
      }
      className={`${classes.websiteButton}`}
      style={{
        width: 30,
        height: 30,
        padding: 0,
        backgroundColor: computedColorScheme === "dark" ? "#FFFFFF" : "#000000",
        color: computedColorScheme === "dark" ? "#000000" : "#FFFFFF",
      }}
    >
      <FaLinkedin style={{ width: "30px", height: "30px" }} />
    </Button>
  );

  const toggleModeButton = (
    <Button
      size="sm"
      variant="link"
      onClick={toggleColorScheme}
      className={`${classes.websiteButton}`}
      style={{
        width: 30,
        height: 30,
        padding: 0,
        backgroundColor: computedColorScheme === "dark" ? "#000000" : "#FFFFFF",
        color: computedColorScheme === "dark" ? "#FFFFFF" : "#000000",
      }}
    >
      {computedColorScheme === "dark" ? (
        <FaSun style={{ width: "16px", height: "16px" }} />
      ) : (
        <FaMoon style={{ width: "16px", height: "16px" }} />
      )}
    </Button>
  );

  const buttons = [githubButton, linkedInButton, toggleModeButton];

  return (
    <header
      className={`${classes.header} ${classes.fixed}`}
      style={{ padding: "20px 0" }}
    >
      <Container size="lg" className={classes.inner}>
        <span style={{ fontWeight: "bold", fontSize: "24px" }}>
          Hannah Hsiao
        </span>
        <Group gap={30} visibleFrom="xs">
          {items}
        </Group>
        <Group gap={5} className={classes.websiteButtons}>
          {buttons}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
};

export default Header;
