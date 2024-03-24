import {
  Container,
  Text,
  Group,
  useMantineColorScheme,
  useComputedColorScheme,
  Title,
  Image,
} from "@mantine/core";
import { mySkills } from "./MySkills";
import SkillCard from "./SkillCard";
import image from "./snoopyWelcome.png";

const BREAKPOINT = "@media (max-width: 755px)";

const Skills = () => {
  const { colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  // Define the background color
  const backgroundColor =
    computedColorScheme === "dark"
      ? colorScheme === "dark"
        ? "#242424"
        : "#ec627a"
      : "#ec627a";

  // Define the text color
  const textColor = computedColorScheme === "dark" ? "#FFFFFF" : "#000000";

  return (
    <div id="skills">
      <div
        id="skills"
        style={{
          position: "relative",
          background: `${backgroundColor} no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <Container
          size={900}
          style={{
            position: "relative",
            paddingTop: 100,
            paddingBottom: 100,
            textAlign: "center",
          }}
        >
          <Title
            order={2}
            size="h1"
            style={{
              fontFamily: "Greycliff CF, var(--mantine-font-family)",
              fontSize: 56,
              fontWeight: 1000,
              lineHeight: 1.3,
              margin: 0,
              padding: 0,
              color: textColor, // Apply text color here
            }}
            fw={900}
            ta="center"
          >
            Skills
          </Title>

          <Group mt={24}>
            {mySkills.map((skill, i) => (
              <SkillCard key={i} {...skill} />
            ))}
          </Group>
        </Container>
        {/* <div
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
          }}
        >
          <Image src={image} width={350} height={350} />
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
