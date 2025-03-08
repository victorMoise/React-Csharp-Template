import { useTranslation } from "react-i18next";
import PageContent from "../../../common/components/PageContent";

const ProfileContainer = () => {
  const { t } = useTranslation("common");

  return (
    <PageContent pageTitle={t("Sidebar.Profile")}>

    </PageContent>
  );
};

export default ProfileContainer;
