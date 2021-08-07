import React from "react";
import { Box } from "@material-ui/core";
import { Button } from "../Button/Button";
import { useStyles } from "./Footerbutton.style";
import "./Footerbutton.scss"
import iconcheck from "../../_assets/img/IconCheck.svg"


interface ProcessPageFooterProps {
  primaryButton?: React.ReactNode;
}

export const Footerbutton: React.FC<ProcessPageFooterProps> = ({
  primaryButton,
}) => {
  const styles = useStyles();

  const onPreviousButtonClick = () => console.log("nada");

  return (
    <Box className={styles.buttonsWrapper}>
      <Button
        palette="secondary"
        size="large"
        startIcon={<img className={styles.nextlogo} src={iconcheck} alt="logo" />}
        onClick={onPreviousButtonClick} 
      >
        Salvar
      </Button>  
    </Box>
  );
};
