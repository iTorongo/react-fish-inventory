import { Typography } from "../../../../components/atoms";
import Card from "../../../../components/molecules/Card/Card";
import { TankHealth } from "../../../../types";

const TankHealthCard = ({ tank1, tank2 }: Props) => {
  const renderTankHealth = (tank?: TankHealth) => {
    return (
      <>
        <div>
          <span className="text-sm">Oxygen Level</span>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {tank?.waterQuality.oxygenLevel}
          </h4>
        </div>
        <div>
          <span className="text-sm">PH</span>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {tank?.waterQuality.pH}
          </h4>
        </div>
        <div>
          <span className="text-sm">Temperature</span>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {tank?.waterQuality.temperature}
          </h4>
        </div>
      </>
    );
  };
  return (
    <Card>
      <Typography className="text-xl text-slate-400 mb-3">
        Tank Status
      </Typography>
      <Typography variant="body" className="text-sm text-slate-500">
        Tank 1 Health Status
      </Typography>
      <div className="flex items-end justify-between">
        {!!tank1 && renderTankHealth(tank1)}
      </div>
      <Typography variant="body" className="text-sm mt-3 text-slate-500">
        Tank 2 Health Status
      </Typography>
      <div className="flex items-end justify-between">
        {!!tank2 && renderTankHealth(tank2)}
      </div>
    </Card>
  );
};

interface Props {
  tank1?: TankHealth;
  tank2?: TankHealth;
}

export default TankHealthCard;
