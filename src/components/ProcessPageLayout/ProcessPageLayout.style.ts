import { makeStyles } from "@material-ui/core";
import { theme } from '../../_config/theme';

const padding = 16;

interface StylesProps {
  footerPosition?: "relative" | "fixed";
}

export const useStyles = makeStyles<typeof theme, StylesProps>({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  header: {
    padding: padding,
    height: 169,
  },
  main: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: padding,
    marginBottom: "-26px",
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  footer: {
    width: "100%",
    position: ({ footerPosition }) => footerPosition ?? "relative",
    backgroundColor: theme.palette.background.paper,
    bottom: 0,
    left: 0,
    right: 0,

    "& .MuiContainer-root": {
      padding: 0,
    },
  },
});
