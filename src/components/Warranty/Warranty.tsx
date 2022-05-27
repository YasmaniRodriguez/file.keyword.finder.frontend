import React from "react";
import StyledWarranty from "./StyledWarranty";
import { Box, Typography } from "@mui/material";
import { theme } from "../../assets/themes";

interface Props {}

const Warranty = (props: Props) => {
  return (
    <StyledWarranty>
      <Box sx={{ flexGrow: 1 }}>
        <Box>
          <Box
            component={"img"}
            src="./images/metric.png"
            sx={{ width: "80px", height: "80px" }}
          />
          <Typography variant="h5" component={"h5"}>
            Elegí cómo pagar
          </Typography>
          <Typography>
            Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin
            tarjeta con Mercado Crédito.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          "::before": {
            content: `''`,
            height: "100px",
            width: "1px",
            background: theme.colors.primary,
            display: { xs: "none", lg: "block" },
          },
          "::after": {
            content: `''`,
            height: "100px",
            width: "1px",
            background: theme.colors.primary,
            display: { xs: "none", lg: "block" },
          },
        }}
      >
        <Box>
          <Box
            component={"img"}
            src="./images/idea.png"
            sx={{ width: "80px", height: "80px" }}
          />

          <Typography variant="h5" component={"h5"}>
            Envío gratis desde $ 4.000
          </Typography>
          <Typography>
            Solo por estar registrado en Mercado Libre tenés envíos gratis en
            miles de productos. Es un beneficio de Mercado Puntos.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Box>
          <Box
            component={"img"}
            src="./images/rocket.png"
            sx={{ width: "80px", height: "80px" }}
          />
          <Typography variant="h5" component={"h5"}>
            Seguridad, de principio a fin
          </Typography>
          <Typography>
            ¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no
            puedas hacer, porque estás siempre protegido.
          </Typography>
        </Box>
      </Box>
    </StyledWarranty>
  );
};

export default Warranty;
