import {
  Container,
  Text,
  Group,
  useMantineColorScheme,
  useComputedColorScheme,
  Overlay,
} from "@mantine/core";
import { mySkills } from "./MySkills";
import SkillCard from "./SkillCard";

const BREAKPOINT = "@media (max-width: 755px)";

const Skills = () => {
  const { colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  // Define the background color
  const backgroundColor =
    computedColorScheme === "dark"
      ? colorScheme === "dark"
        ? "#d6c1d9"
        : "#F2E7F3"
      : "#F2E7F3";

  // Define the background image URL
  const backgroundImageUrl =
    "url('https://64.media.tumblr.com/a5ee6d62ef261da76b951c2b25f0ca7e/tumblr_n5scf7CTdD1sfvpsto1_500.gif')";

  return (
    <div id="skills">
    <div
      id="skills"
      style={{
        position: "relative",
        background: `${backgroundColor} ${backgroundImageUrl} no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      {/* <Overlay
        gradient="linear-gradient(180deg, rgba(207, 193, 209, 0.8) 0%, rgba(0, 0, 0, 0.65) 100%)"
        opacity={1}
        zIndex={1} // Ensure the overlay is above other elements
      /> */}
      <Container
        size={900}
        style={{
          position: "relative",
          paddingTop: 100,
          paddingBottom: 100,
          textAlign: "center",
        }}
      >
        <Text
          component="h1"
          variant="gradient"
          style={{
            fontFamily: "Greycliff CF, sans-serif",
            fontSize: 56,
            fontWeight: 1000,
            lineHeight: 1.3,
            margin: 0,
            padding: 0,
            color:
              computedColorScheme === "dark"
                ? colorScheme === "dark"
                  ? "#fff"
                  : "#000"
                : colorScheme === "dark"
                ? "#fff"
                : "#000",
            [BREAKPOINT]: {
              fontSize: 36,
              lineHeight: 1.2,
            },
          }}
          gradient={{
            from: "#44004ecc",
            to: "#44004ecc",
            deg: 75,
          }}
        >
          Skills
        </Text>

        <Group mt={24}>
          {mySkills.map((skill, i) => (
            <SkillCard key={i} {...skill} />
          ))}
        </Group>
      </Container>
    </div>
    </div>
  );
};

export default Skills;
