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
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            {/* A <span className={classes.highlight}>modern</span> React <br />{" "}
            components library */}
            Welcome! I'm Hannah!
          </Title>
          <Text c="dimmed" mt="md">
            I'm a first year CS student at the Georgia Institute of Technology!
            I am interested in the intersection of technology and social good! I
            am a CS 1331 TA, a Firmware Developer for Georgia Tech's Solar
            Racing's Auxillary Subteam, and a Software Developer for Tikkun Olam
            Makers! I am currently looking for roles that would allow me to
            explore the power of technology while working towards a good
            purpose!
          </Text>

          {/* <List */}
          {/* mt={30}
            spacing="sm"
            size="sm" */}
          {/* icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            } */}
          {/* > */}
          {/* <List.Item>
              <b>TypeScript based</b> – build type safe applications, all
              components and hooks export types
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – all packages have MIT license, you
              can use Mantine in any project
            </List.Item>
            <List.Item>
              <b>No annoying focus ring</b> – focus ring will appear only when
              user navigates with keyboard
            </List.Item>
          </List> */}

          <Group mt={30}>
            <Button
              //   variant="gradient"
              //   gradient={{ from: "yellow", to: "purple", deg: 90 }}
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
        {/* Apply inline styles to set width and height */}
        <Image
          src={image}
          className={classes.image}
          style={{ width: rem(350), height: rem(350) }}
        />
      </div>
    </Container>
  );
}

export default HomePage;
