import { makeStyles } from "@material-ui/core";
import { textColors } from '../../_config/theme';

export const useStyles = makeStyles({
  title: {
    fontWeight: 600,
    fontSize: 20,
  },

  subtitle: {
    marginTop: 28,
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "16px",

  },
  description: {
    marginTop: 30,
    color: textColors.primary,
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "15.6px",
    marginBottom: 20,
  },

  desc: {
    fontWeight: 600,
    fontSize: 13,
  },

  name: {
    fontWeight: 500,
  },
});