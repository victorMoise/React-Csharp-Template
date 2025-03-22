import React from "react";
import { useTranslation } from "react-i18next";
import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import { SimpleTextField, StyledCard } from "../../../common/styles";
import FakeText from "../../../common/components/FakeText";
import Divider from "@mui/material/Divider";

const ProfileComponent = (props) => {
  const { t } = useTranslation("common");
  const {
    loading,
    user,
    address,
    onUserChange,
    onAddressChange,
    countries,
    onCountryChange,
    cities,
    onCityChange,
  } = props;

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
            onChange={onUserChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="email"
            label={t("MyAccount.Email")}
            value={user?.email}
            onChange={onUserChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="firstName"
            label={t("MyAccount.FirstName")}
            value={user?.firstName}
            onChange={onUserChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="lastName"
            label={t("MyAccount.LastName")}
            value={user?.lastName}
            onChange={onUserChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="phoneNumber"
            label={t("MyAccount.PhoneNumber")}
            value={user?.phoneNumber}
            onChange={onUserChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SimpleTextField
            fullWidth
            type="number"
            name="age"
            label={t("MyAccount.Age")}
            value={user?.age}
            onChange={onUserChange}
          />
        </Grid>

        <Grid item xs={12}>
          <Divider variant="middle" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            {t("MyAccount.Address.Address")}
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Autocomplete
            fullWidth
            options={countries}
            value={address?.country}
            getOptionLabel={(option) => option.name}
            onChange={onCountryChange}
            disabled={!!address?.city}
            renderInput={(params) => (
              <TextField {...params} label={t("MyAccount.Address.Country")} />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            fullWidth
            options={cities}
            value={address?.city}
            getOptionLabel={(option) => option.name}
            onChange={onCityChange}
            renderInput={(params) => (
              <TextField {...params} label={t("MyAccount.Address.City")} />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="street"
            label={t("MyAccount.Address.Street")}
            value={address?.street}
            onChange={onAddressChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="details"
            label={t("MyAccount.Address.Street")}
            value={address?.details}
            onChange={onAddressChange}
          />
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default ProfileComponent;
