import React, {
  useContext,
  ChangeEvent,
  useState,
  KeyboardEvent,
  MouseEvent,
} from "react";
import StyledOrderWrapper from "./StyledOrderWrapper";
import { theme } from "../../assets/themes";
import Record from "../Record/Record";
import Search from "../Search/Search";
import Template from "../Template/Template";
import { DialogContext } from "../../contexts/DialogContext";
import { SnackBarContext } from "../../contexts/SnackBarContext";
import { AppContext } from "../../contexts/AppContext";
import { Box } from "@mui/material";

interface Props {}

const OrderWrapper = (props: Props) => {
  const dlgCtx = useContext(DialogContext);
  const appCtx = useContext(AppContext);
  const snbCtx = useContext(SnackBarContext);

  const [keyword, setKeyword] = useState<string | undefined>();

  const changeKeyword = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    let value = (event.currentTarget as HTMLInputElement).value;
    setKeyword(value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && keyword !== undefined) {
      let exists = appCtx?.order?.keywords.includes(keyword);
      if (exists) {
        snbCtx?.changeMessage(`keyword ${keyword} already exist in the list`);
        snbCtx?.handleOpen();
      }
      return keyword.length > 0
        ? (appCtx?.addOrderKeyword(keyword), setKeyword(""))
        : false;
    }
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    let action = (event.currentTarget as HTMLButtonElement).ariaLabel;

    switch (action) {
      case "template-settings":
        dlgCtx?.handleView("Templates", <Template />, "Ok");
        dlgCtx?.handleOpen();
        break;

      case "order-submit":
        break;

      default:
        break;
    }
  };

  return (
    <StyledOrderWrapper>
      <Box
        sx={{
          margin: "auto",
          border: `solid 1px ${theme.colors.primary}`,
          display: "flex",
          flexWrap: "wrap",
          position: "relative",
          width: "80%",
          minHeight: "70vh",
          marginTop: "20px",
        }}
      >
        <Record />
        <Search
          keyword={keyword}
          changeKeyword={changeKeyword}
          handleKeyDown={handleKeyDown}
          handleClick={handleClick}
        />
      </Box>
    </StyledOrderWrapper>
  );
};

export default OrderWrapper;
