import { Box, Collapse, Group, Paper } from "@mantine/core";
import { createStyles } from "@mantine/styles";
import { useToggle } from "@mantine/hooks";
import { ReactNode } from "react";

export interface SkillCardProps {
  icon: ReactNode;
  name: ReactNode;
}

const useStyles = createStyles((theme) => ({
  card: {
    width: "calc(25% - 20px)", // Adjusted width to fit 4 cards per row -> 160 for 5 per row
  },

  name: {},

  icon: {
    padding: 8,
    margin: "8px 0 8px 8px",
    borderRadius: theme.radius.sm,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[0],
    lineHeight: 0,
  },

  chevron: {
    margin: 8,
    transition: "transform 0.2s ease",
    cursor: "pointer",
    color: theme.colors[theme.primaryColor][6],
  },
}));

const SkillCard: React.FC<SkillCardProps> = ({ icon, name }) => {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useToggle([false, true]);

  return (
    <Paper withBorder shadow="xs" className={classes.card}>
      <Group align="center">
        <Box className={classes.icon}>{icon}</Box>
        <Box className={classes.name}>{name}</Box>
      </Group>
    </Paper>
  );
};

export default SkillCard;
