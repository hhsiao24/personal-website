import React, { useEffect, useState } from "react";
import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import image from "./plant.png";
import classes from "./HomePage.module.css";

export function HomePage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
      console.log("Animation started");
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const { colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  // Define the background color
  const backgroundColor =
    computedColorScheme === "dark"
      ? colorScheme === "dark"
        ? "#a9d9d9"
        : "white"
      : "white";
  const textColor = computedColorScheme === "dark" ? "#FFFFFF" : "#000000";

  return (
    <Container size={1600} style={{ background: backgroundColor }}>
      <div className={classes.inner}>
        <div className={`${classes.content} ${animate && classes.animate}`}>
          <Title
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
            className={`${classes.title} ${animate && classes.animate}`}
          >
            Welcome! I'm Hannah!
          </Title>
          <Text
            className={`${classes.description} ${animate && classes.animate}`}
            c="dimmed"
            mt="md"
          >
            I'm a first year CS student at the Georgia Institute of Technology!
            I am interested in the intersection of technology and social good! I
            am a CS 1331 TA, a Firmware Developer for Georgia Tech's Solar
            Racing's Auxiliary Subteam, and a Software Developer for Tikkun Olam
            Makers! I am currently looking for roles that would allow me to
            explore the power of technology while working towards a good
            purpose!
          </Text>

          <Group mt={30}>
            <Button
              className={`${classes.buttonContainer} ${
                animate && classes.animate
              }`}
              color="#ec627a"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1OVu-M1r4TLKJXgZbRJUETWVfOE5zItTa/view?usp=sharing",
                  "_blank"
                )
              }
            >
              Resume
            </Button>
          </Group>
        </div>
        <Image
          src={image}
          className={`${classes.image} ${animate && classes.animate}`}
          style={{ width: rem(550), height: rem(450), marginTop: rem(-50) }}
        />
      </div>
    </Container>
  );
}

export default HomePage;
