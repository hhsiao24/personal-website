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
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import image from "./snoopyWelcome.png";
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

  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={`${classes.content} ${animate && classes.animate}`}>
          <Title className={`${classes.title} ${animate && classes.animate}`}>
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
            Racing's Auxillary Subteam, and a Software Developer for Tikkun Olam
            Makers! I am currently looking for roles that would allow me to
            explore the power of technology while working towards a good
            purpose!
          </Text>

          <Group mt={30}>
            <Button
              //   variant="gradient"
              //   gradient={{ from: "yellow", to: "purple", deg: 90 }}
              className={`${classes.buttonContainer} ${animate && classes.animate}`}
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
          style={{ width: rem(350), height: rem(350) }}
        />
      </div>
    </Container>
  );
}

export default HomePage;
