import {
  Container,
  Text,
  useMantineColorScheme,
  useComputedColorScheme,
  Title,
  Image,
} from "@mantine/core";
import { Project } from "./Projects";
import styles from "./ProjectsPage.module.css";
import image from "./snoopyWelcome.png";

const projectData1 = {
  image:
    "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F56de9fa80e1641f794eb066411a065cc%2Fprojects%2F72eb60f37d7a4e8ca34aecb049dc6d81%2Fa8e0c075-21cf-4395-9c54-8e6d1a922f30.jpeg&w=1440&q=75",
  title: "Form Fit",
  description:
    "Designed to prevent long and short term injuries, Form Fit works to improve user's exercise forms! All the user has to do is upload a video of them doing a specific exercise, and the website will analyze their form and provide specific feedback!",
  badges: [
    {
      emoji: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
          height={18}
          width={18}
        />
      ),
      label: "Python",
    },
    {
      emoji: (
        <img src="https://viz.mediapipe.dev/logo.png" height={18} width={18} />
      ),
      label: "MediaPipe",
    },
    {
      emoji: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          height={18}
          width={18}
        />
      ),
      label: "React.js",
    },
    {
      emoji: (
        <img
          src="https://static-00.iconduck.com/assets.00/google-cloud-run-icon-512x460-knkc4eyx.png"
          height={18}
          width={18}
        />
      ),
      label: "Google Cloud Run",
    },
    {
      emoji: (
        <img
          src="https://github.com/opencv/opencv/wiki/logo/OpenCV_logo_black.png"
          height={18}
          width={18}
        />
      ),
      label: "OpenCV",
    },
    {
      emoji: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
          height={18}
          width={18}
        />
      ),
      label: "TypeScript",
    },
  ],
  githubUrl: "https://github.com/tsar-boomba/hacklytics-frontend",
  websiteUrl: "https://formfit.tech/",
};

const projectData2 = {
  image:
    "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/802/480/datas/original.jpg",
  title: "GyMate",
  description:
    "GyMate helps people find gym buddies! Users simply create a profile, and possible matches are automatically filtered based on availability. From there, users can connect to each other through their contact information, and join the gym community!",
  badges: [
    {
      emoji: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
          height={18}
          width={18}
        />
      ),
      label: "Python",
    },
    {
      emoji: (
        <img
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/sqlite_logo_icon_169724.png"
          height={18}
          width={18}
        />
      ),
      label: "SQLite",
    },
    {
      emoji: (
        <img
          src="https://gitlab.com/uploads/-/system/project/avatar/37467835/fastapi.png"
          height={18}
          width={18}
        />
      ),
      label: "FastAPI",
    },
    {
      emoji: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          height={18}
          width={18}
        />
      ),
      label: "React.js",
    },
    {
      emoji: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
          height={18}
          width={18}
        />
      ),
      label: "TypeScript",
    },
  ],
  githubUrl: "https://github.com/b2abbasi/wacc-hack-24",
  websiteUrl: "https://devpost.com/software/gymate-vklpgn",
};

export function ProjectsPage() {
  const { colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");
  const backgroundColor =
    computedColorScheme === "dark"
      ? colorScheme === "dark"
        ? "#a9d9d9"
        : "white"
      : "white";
  const textColor = computedColorScheme === "dark" ? "#FFFFFF" : "#000000";


  // Define the background image URL
  const backgroundImageUrl =
    "url('https://i.pinimg.com/originals/cd/0c/1b/cd0c1b964450ab5a9978087ee06d6814.jpg')";
  return (
    <div
      id="projects"
      style={{
        position: "relative",
        background: `${backgroundColor} no-repeat center center`, //${backgroundImageUrl}
        backgroundSize: "cover",
      }}
    >
      <Container
        size={900}
        style={{
          position: "relative",
          paddingTop: 50,
          paddingBottom: 20,
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
            color: textColor,
          }}
          fw={900}
          ta="center"
        >
          Projects
        </Title>
        <div
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
          }}
        ></div>
        <div className={styles.grid}>
          <Project {...projectData1} />
          <Project {...projectData2} />
        </div>
      </Container>
      {/* <div
        style={{
          position: "absolute",
          bottom: 20,
          right: 100,
        }}
      >
        <Image src={image} width={200} height={200} />
      </div> */}
    </div>
  );
}

export default ProjectsPage;
