import { SkillCardProps } from "./SkillCard";
import {
  SiC,
  SiCss3,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { Text } from "@mantine/core";

import {
  c,
  css,
  react,
  typescript,
} from "../utils/brandColors";

export const mySkills: SkillCardProps[] = [
  {
    name: <Text component="h1">Java</Text>,
    icon: (
      <img
        src="https://www.vectorlogo.zone/logos/java/java-icon.svg"
        height={18}
        width={18}
      />
    ),
  },
  {
    name: <Text component="h1">Python</Text>,
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
        height={18}
        width={18}
      />
    ),
  },
  {
    name: <Text component="h1">HTML</Text>,
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
        height={18}
        width={18}
      />
    ),
  },
  {
    name: <Text component="h1">JavaScript</Text>,
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        height={18}
        width={18}
      />
    ),
  },
  {
    name: <Text component="h1">TypeScript</Text>,
    icon: <SiTypescript size={18} color={typescript} />,
  },
  {
    name: <Text component="h1">React</Text>,
    icon: <SiReact size={18} color={react} />,
  },
  {
    name: <Text component="h1">CSS</Text>,
    icon: <SiCss3 size={18} color={css} />,
  },
  {
    name: <Text component="h1">C</Text>,
    icon: <SiC size={18} color={c} />,
  },
];
