import { useTranslation } from "react-i18next";
import { endpoints } from "../../../utils/endpoints";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../../utils/axios";
import ProfileComponent from "./ProfileComponent";
import useToast from "../../../hooks/useToast";
import Toast from "../../../common/components/Toast";
import PageContent from "../../../common/components/PageContent";


const ProfileContainer = () => {
  const { t } = useTranslation("common");
  const { toast, showToast, handleClose } = useToast();
  const [user, setUser] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [address, setAddress] = useState({
    city: "",
    country: "",
    street: "",
    details: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axiosInstance.get(endpoints.user.details);
        const { addressData, ...userData } = response.data;

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

  return (
    <>
      <PageContent pageTitle={t("Sidebar.MyAccount")}>
        <ProfileComponent address={address} user={user} loading={loading} />
      </PageContent>
      <Toast toast={toast} handleClose={handleClose} />
    </>
  );
};

export default ProfileContainer;
