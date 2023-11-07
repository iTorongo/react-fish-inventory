import { useTranslation } from "react-i18next";
import BaseTable from "../../../../components/molecules/BaseTable/BaseTable";
import { Column } from "../../../../types/table.types";
import { Typography } from "../../../../components/atoms";

const HealthRecordScreen = () => {
  const { t } = useTranslation("healthRecord");

  const healthRecordColumn: Column[] = [
    {
      name: "id",
    },
    {
      name: "name",
    },
    {
      name: "age",
    },
  ];

  return (
    <section>
      <Typography variant="subheading" className="text-xl mb-4">
        {t("title")}
      </Typography>
      <BaseTable columns={healthRecordColumn}>
        {[1, 2]?.map((val, index) => {
          return (
            <tr key={`${val}-${index}`} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-slate-100 text-center">
                Hello
              </td>
              <td className="py-2 px-4 border-b border-slate-100 text-center">
                Hello
              </td>
              <td className="py-2 px-4 border-b border-slate-100 text-center">
                Hello
              </td>
            </tr>
          );
        })}
      </BaseTable>
    </section>
  );
};

export default HealthRecordScreen;
