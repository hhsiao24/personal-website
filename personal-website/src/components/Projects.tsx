import { IconHeart } from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  Container,
} from "@mantine/core";
import classes from "./Projects.module.css";
import { ReactNode } from "react";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  badges: { emoji: ReactNode; label: string }[];
  githubUrl: string; // Add githubUrl property
  websiteUrl: string;
}

export function Project({
  image,
  title,
  description,
  badges,
  githubUrl,
  websiteUrl,
}: ProjectProps) {
  const features = badges.map((badge) => (
    <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ));

  const handleGitHubButtonClick = () => {
    window.open(githubUrl, "_blank"); // Open GitHub link in new tab
  };
  const handleWebsiteClick = () => {
    window.open(websiteUrl, "_blank"); // Open GitHub link in new tab
  };

  return (
    <div id="home">
    <Container
      size={900}
      style={{
        position: "relative",
        paddingTop: 30,
        paddingBottom: 100,
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Card withBorder radius="md" p="md" className={classes.card}>
          <Card.Section>
            <Image src={image} alt={title} height={180} />
          </Card.Section>

          <Card.Section className={classes.section} mt="md">
            <Group justify="apart">
              <Text fz="lg" fw={500}>
                {title}
              </Text>
            </Group>
            <Text fz="sm" mt="xs">
              {description}
            </Text>
          </Card.Section>

          <Card.Section className={classes.section}>
            <Group gap={7} mt={5}>
              {features}
            </Group>
          </Card.Section>

          <Group mt="xs">
            <Button
              radius="md"
              style={{ flex: 1 }}
              onClick={handleGitHubButtonClick}
            >
              GitHub
            </Button>
            <Button
              radius="md"
              style={{ flex: 1 }}
              onClick={handleWebsiteClick}
            >
              Visit
            </Button>
          </Group>
        </Card>
      </div>
    </Container>
    </div>
  );
}
