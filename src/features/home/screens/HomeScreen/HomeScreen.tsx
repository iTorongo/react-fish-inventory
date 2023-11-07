import { useTranslation } from "react-i18next";
import { Typography } from "../../../../components/atoms";

const HomeScreen = () => {
  const { t } = useTranslation("common");
  return (
    <section className="flex justify-center">
      <Typography variant="heading" className="text-xl">
        {t("title")}
      </Typography>
    </section>
  );
};

export default HomeScreen;
