import React, {
  useContext,
  ChangeEvent,
  useState,
  KeyboardEvent,
  MouseEvent,
} from "react";
import StyledOrder from "./StyledOrder";
import Record from "../Record/Record";
import Keyword from "../Keyword/Keyword";
import { DialogContext } from "../../contexts/DialogContext";
import { SnackBarContext } from "../../contexts/SnackBarContext";
import { AppContext } from "../../contexts/AppContext";

interface Props {}

const Order = (props: Props) => {
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
        dlgCtx?.handleOpen();
        break;

      case "order-submit":
        break;

      default:
        break;
    }
  };

  return (
    <StyledOrder>
      <Record />
      <Keyword
        keyword={keyword}
        changeKeyword={changeKeyword}
        handleKeyDown={handleKeyDown}
        handleClick={handleClick}
      />
    </StyledOrder>
  );
};

export default Order;
