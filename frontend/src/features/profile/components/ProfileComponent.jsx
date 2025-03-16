import React from "react";
import { useTranslation } from "react-i18next";
import { Divider, Grid, TextField, Typography } from "@mui/material";
import { SimpleTextField, StyledCard } from "../../../common/styles";
import FakeText from "../../../common/components/FakeText";

const ProfileComponent = (props) => {
  const { t } = useTranslation("common");
  const { user, address, loading } = props;

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
            name="username"
            label={t("MyAccount.Username")}
            value={user?.username}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="email"
            label={t("MyAccount.Email")}
            value={user?.email}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="firstName"
            label={t("MyAccount.FirstName")}
            value={user?.firstName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="lastName"
            label={t("MyAccount.LastName")}
            value={user?.lastName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="phoneNumber"
            label={t("MyAccount.PhoneNumber")}
            value={user?.phoneNumber}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SimpleTextField
            fullWidth
            type="number"
            name="age"
            label={t("MyAccount.Age")}
            value={user?.age}
          />
        </Grid>

        <Divider />
        <Grid item xs={12} md={6}>
          <SimpleTextField
            fullWidth
            name="country"
            label={t("MyAccount.Address.Country")}
            value={address?.country}
          />
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default ProfileComponent;
