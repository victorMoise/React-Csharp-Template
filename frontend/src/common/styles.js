import { Card } from "@mui/material";
import { styled } from "@mui/system";

export const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.background.default,
  margin: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));