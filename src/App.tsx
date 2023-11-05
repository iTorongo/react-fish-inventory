import { useTranslation } from "react-i18next";
import "./App.scss";

function App() {
  const { t } = useTranslation("common");

  return (
    <>
      <h1 className="text-3xl font-bold">{t("title")}</h1>
    </>
  );
}

export default App;
