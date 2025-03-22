import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useToast from "../../../hooks/useToast";
import { axiosInstance } from "../../../utils/axios";
import { endpoints, fit } from "../../../utils/endpoints";
import Toast from "../../../common/components/Toast";
import AddressDetailsComponent from "./AddressDetailsComponent";

const AddressDetailsContainer = () => {
  const { t } = useTranslation("common");
  const { toast, showToast, handleClose } = useToast();
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [address, setAddress] = useState({
    city: {
      id: null,
      code: "",
      name: "",
    },
    country: {
      id: null,
      code: "",
      name: "",
    },
    street: "",
    details: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const address = await axiosInstance.get(endpoints.user.address);
        setAddress(address.data);

        const countries = await axiosInstance.get(endpoints.user.countries);
        setCountries(countries.data);

        const cities = await axiosInstance.get(
          fit(endpoints.user.cities, { countryId: address.data.country.id }));
        setCities(cities.data);
      } catch (err) {
        showToast(err.message || t("MyAccount.Error.FetchingData"), "error");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [showToast, t]);

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
      country: newValue,
      city: null,
    }));
  };

  const handleCityChange = (_event, newValue) => {
    setAddress((prevState) => ({
      ...prevState,
      city: newValue,
    }));
  };
  return (
    <>
      <AddressDetailsComponent
        address={address}
        cities={cities}
        countries={countries}
        loading={loading}
        onAddressChange={handleAddressChange}
        onCountryChange={handleCountryChange}
        onCityChange={handleCityChange}
      />
      <Toast toast={toast} handleClose={handleClose} />
    </>
  );
};

export default AddressDetailsContainer;
