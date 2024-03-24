import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ padding: "16px", display: "flex", gap: "10px" }}>
      <NavLink
        to="/text-component"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        Text Component
      </NavLink>
      <NavLink
        to="/button-component"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        Button Component
      </NavLink>
    </div>
  );
};

export default Navbar;

// import { AppShell, NavLink } from "@mantine/core";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <AppShell.Navbar p="md" style={{ gap: "10px" }}>
//       <NavLink
//         label="Text Component"
//         onClick={() => navigate("/text-component")}
//         style={{ margin: "5px" }}
//       />
//       <NavLink
//         label="Button Component"
//         onClick={() => navigate("/button-component")}
//         style={{ margin: "5px" }}
//       />
//     </AppShell.Navbar>
//   );
// };

// export default Navbar;
// import { useState } from "react";
// import { Container, Group, Burger } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
// import { MantineLogo } from "@mantinex/mantine-logo";
// import classes from "./Navbar.module.css";

// const links = [
//   { link: "/about", label: "Features" },
//   { link: "/pricing", label: "Pricing" },
//   { link: "/learn", label: "Learn" },
//   { link: "/community", label: "Community" },
// ];

// export function Navbar() {
//   const [opened, { toggle }] = useDisclosure(false);
//   const [active, setActive] = useState(links[0].link);

//   const items = links.map((link) => (
//     <a
//       key={link.label}
//       href={link.link}
//       className={classes.link}
//       data-active={active === link.link || undefined}
//       onClick={(event) => {
//         event.preventDefault();
//         setActive(link.link);
//       }}
//     >
//       {link.label}
//     </a>
//   ));

//   return (
//     <header className={classes.header}>
//       <Container size="md" className={classes.inner}>
//         <MantineLogo size={28} />
//         <Group gap={5} visibleFrom="xs">
//           {items}
//         </Group>

//         <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
//       </Container>
//     </header>
//   );
// }

// export default Navbar;
