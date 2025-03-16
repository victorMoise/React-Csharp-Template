import React from "react";
import { useTranslation } from "react-i18next";
import {
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { StyledCard } from "../../../common/styles";
import FakeText from "../../../common/components/FakeText";

const ProfileComponent = (props) => {
  const { t } = useTranslation("common");
  const { data, loading } = props;

  if (loading)
    return (
      <StyledCard>
        <FakeText lines={10} />
      </StyledCard>
    );

  return (
    <StyledCard>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            {t("MyAccount.MyAccount")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            margin="normal"
            label={t("MyAccount.Username")}
            value={data?.username}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            margin="normal"
            label={t("MyAccount.Email")}
            value={data?.email}
          />
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default ProfileComponent;
