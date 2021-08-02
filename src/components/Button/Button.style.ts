import { makeStyles, Theme } from "@material-ui/core";
import { colors, textColors } from '../../_config/theme';

export interface ButtonStylesProps {
  variant?: "outlined" | "contained";
  size?: "small" | "medium" | "large";
  palette?: "primary" | "secondary";
  radius?: number;
}

export const useStyles = makeStyles<Theme, ButtonStylesProps, "button">({
  button: {
    height: 36,
    fontSize: 12,
    backgroundColor: ({ palette, variant }) => {
      if (variant === "outlined") return "transparent";

      return palette === "primary" ? colors.primary.main : "white";
    },
    color: ({ palette, variant }) => {
      if (variant === "outlined") return textColors.primary;

      return palette === "primary" ? "white" : textColors.primary;
    },
    borderRadius: 4,

    "&.MuiButton-contained": {
      border: "0.5px solid transparent",
    },

    "&.MuiButton-outlined": {
      border: ({ palette }) =>
        `0.5px solid ${
          palette === "primary" ? colors.primary.main : colors.secondary
        }`,
    },

    "& .MuiButton-label": {
      textTransform: "none",
      textAlign: "center",
      width: 40,
      height: 12,
    },

    "&.MuiButton-sizeSmall": {
      fontSize: '10px',
      height: 25,
      width: 79,
      marginLeft: '30%',
      
    },
    "& .MuiButton-iconSizeSmall": {
      "& > *:first-child, & > *:last-child": {
        fontSize: 14,
      },
    },

    "&.MuiButton-sizeLarge": {
      minWidth: 120,
      fontSize: 12,
      height: 40,
      width: "56.85px",
    },
  },
});
