import React from "react";
import { Box, Button } from "@material-ui/core";
import { useStyles } from "./ButtonFooter.styles";


interface ButtonFooterProps {
  icon: string;
  iconAlt?: string;
  size?: "small" | "medium" | "large";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string
}

export const ButtonFooter: React.FC<ButtonFooterProps> = ({
  icon,
  iconAlt,
  size = "medium",
  onClick,
  children,
  className

}) => {
  const styles = useStyles({ size });

  return (
    <Button
      variant="contained"
      size={size}
      className={styles.button}
      onClick={onClick}
  >
      <Box className={styles.icon}>
          <img src={icon} alt={iconAlt} />
      </Box>
          Salvar
      {children}
  </Button>
  );
};
