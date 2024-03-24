import React, { useEffect, useState } from "react";
import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Container,
  Image,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import emailjs from "emailjs-com";
import image from "./stand.png";

export function Contact() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qu3gggt",
        "template_6dwbswr",
        e.currentTarget,
        "PByNIus1RazSFTS0hX6cn"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          alert("An error occurred while sending the message.");
        }
      );

    e.currentTarget.reset();
  };

  return (
    <div id="connect">
      <Container
        size={1600}
        style={{
          position: "relative",
          paddingTop: 50,
          paddingBottom: 20,
          paddingRight: 350,
          paddingLeft: 350,
          textAlign: "center",
          backgroundColor:
            computedColorScheme === "dark" ? "#242424" : "#ec627a",
          color: computedColorScheme === "dark" ? "#FFFFFF" : "#000000",
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
          }}
          fw={900}
          ta="center"
        >
          Connect
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
        />

        <Group justify="center" mt="xl">
          <Button
            color="#ec627a" // Set the color of the button here
            type="submit"
            size="md"
          >
            Send message
          </Button>
        </Group>

        <div
          style={{
            position: "absolute",
            bottom: 90,
            right: 100,
          }}
        >
          <Image src={image} width={400} height={400} />
        </div>
      </Container>
    </div>
  );
}

export default Contact;
