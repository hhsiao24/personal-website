import { Overlay, Container, Title, Button, Text } from "@mantine/core";
import classes from "./Home.module.css";

export function Home() {
  return (
    <div id="home">
      <div className={classes.hero}>
        {/* <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      /> */}
        <Container className={classes.container} size="md">
          <Title
            className={classes.title}
            order={1}
            style={{ fontSize: "50px" }}
          >
            Welcome to my Portfolio! I'm Hannah!
          </Title>
          <Text className={classes.description} size="xl" mt="xl">
            I'm a first year CS student at the Georgia Institute of Technology!
            I am interested in the intersection of technology and social good! I
            am a CS 1331 TA, a Firmware Developer for Georgia Tech's Solar
            Racing's Auxillary Subteam, and a Software Developer for Tikkun Olam
            Makers! I am currently looking for roles that would allow me to
            explore the power of technology while working towards a good
            purpose!
          </Text>
          <div className={classes.buttonContainer}>
            <Button
              variant="gradient"
              gradient={{ from: "yellow", to: "purple", deg: 90 }}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1OVu-M1r4TLKJXgZbRJUETWVfOE5zItTa/view?usp=sharing",
                  "_blank"
                )
              }
            >
              Resume
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
