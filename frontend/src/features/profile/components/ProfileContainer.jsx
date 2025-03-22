import { useTranslation } from "react-i18next";
import { endpoints, fit } from "../../../utils/endpoints";
import { useCallback, useEffect, useState } from "react";
import { axiosInstance } from "../../../utils/axios";
import ProfileComponent from "./ProfileComponent";
import useToast from "../../../hooks/useToast";
import Toast from "../../../common/components/Toast";
import PageContent from "../../../common/components/PageContent";

const ProfileContainer = () => {
  const { t } = useTranslation("common");
  const { toast, showToast, handleClose } = useToast();
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [user, setUser] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [address, setAddress] = useState({
    city: null,
    country: null,
    street: "",
    details: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const details = await axiosInstance.get(endpoints.user.details);
        const { addressData, ...userData } = details.data;

        const countries = await axiosInstance.get(endpoints.user.countries);
        setCountries(countries.data);

        setUser(userData);
        setAddress(addressData);
      } catch (err) {
        showToast(err.message || t("MyAccount.Error.FetchingData"), "error");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [showToast, t]);

  const handleUserChange = useCallback((e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleAddressChange = useCallback((e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleCountryChange = async (_event, newValue) => {
    if (!newValue) {
      setCities([]);
      setAddress((prevState) => ({
        ...prevState,
        country: null,
        city: null,
      }));
      return;
    }

    const citiesUrl = fit(endpoints.user.cities, { countryId: newValue.id });
    const citiesResponse = await axiosInstance.get(citiesUrl);
    setCities(citiesResponse.data);

    setAddress((prevState) => ({
      ...prevState,
      country: newValue ? newValue.id : null,
      city: null,
    }));
  };

  const handleCityChange = (_event, newValue) => {
    setAddress((prevState) => ({
      ...prevState,
      city: newValue ? newValue.id : null,
    }));
  };

  return (
    <>
      <PageContent pageTitle={t("Sidebar.MyAccount")}>
        <ProfileComponent
          loading={loading}
          user={user}
          address={address}
          onUserChange={handleUserChange}
          onAddressChange={handleAddressChange}
          countries={countries}
          onCountryChange={handleCountryChange}
          cities={cities}
          onCityChange={handleCityChange}
        />
      </PageContent>
      <Toast toast={toast} handleClose={handleClose} />
    </>
  );
};

export default ProfileContainer;
