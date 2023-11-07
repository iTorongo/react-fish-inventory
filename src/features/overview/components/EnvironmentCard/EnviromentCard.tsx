import Card from "../../../../components/molecules/Card/Card";

const EnvironmentCard = ({ weather, temperature, season }: Props) => {
  return (
    <Card>
      <h4 className="text-xl text-slate-400 mb-3">Environment</h4>
      <div className="flex items-end justify-between">
        <div>
          <span className="text-sm">Season</span>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {season}
          </h4>
        </div>
        <div>
          <span className="text-sm">Weather</span>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {weather}
          </h4>
        </div>
        <div>
          <span className="text-sm">Temperature</span>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {temperature}
          </h4>
        </div>
      </div>
    </Card>
  );
};

interface Props {
  weather?: string;
  temperature?: number;
  season?: string;
}

export default EnvironmentCard;
