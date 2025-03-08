import React from "react";
import { useTranslation } from "react-i18next";
import PageContent from "../../../common/components/PageContent";

const HomeContainer = () => {
  const { t } = useTranslation("common");
  return <PageContent pageTitle={t("Sidebar.Home")}></PageContent>;
};

export default HomeContainer;
