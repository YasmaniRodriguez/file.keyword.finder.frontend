import React, { useContext } from "react";
import StyledHome from "./StyledHome";
import Copywriting from "../../components/Copywriting/Copywriting";
import UploadWrapper from "../../components/UploadWrapper/UploadWrapper";
import Warranty from "../../components/Warranty/Warranty";
import OrderWrapper from "../../components/OrderWrapper/OrderWrapper";
import { AppContext } from "../../contexts/AppContext";

const Home = () => {
  const appCtx = useContext(AppContext);
  return (
    <StyledHome>
      {appCtx?.order ? <OrderWrapper /> : <UploadWrapper />}
      <Copywriting
        header={
          appCtx?.order ? "Everything is ready to go" : "Let's do it together"
        }
        subheader={appCtx?.order ? "Absolutely amazing!" : "I'm very anxious"}
      />
      <Warranty />
    </StyledHome>
  );
};

export default Home;
