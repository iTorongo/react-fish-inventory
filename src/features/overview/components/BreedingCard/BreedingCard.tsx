import { Typography, Badge } from "../../../../components/atoms";
import Card from "../../../../components/molecules/Card/Card";
import { ISOToDefaultDateTimeFormat } from "../../../../helpers/utils.helpers";
import { RecentHealthCheck } from "../../../../types";

const BreedingCard = ({
  successfulBreedingEvents,
  fryCount,
  healthChecks,
}: Props) => {
  return (
    <Card>
      <h4 className="text-xl text-slate-400 mb-3">Breeding Status</h4>
      <div className="flex items-end justify-between">
        <div>
          <span className="text-sm">Successful Breeding Events</span>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {successfulBreedingEvents}
          </h4>
        </div>
        <div>
          <span className="text-sm">Fry Count</span>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {fryCount}
          </h4>
        </div>
      </div>
      {!!healthChecks?.length && (
        <h4 className="text-large text-slate-400 my-3">Health Status</h4>
      )}
      {healthChecks?.map((healthCheck) => {
        return (
          <div key={`${healthCheck?.time}`}>
            <Badge
              bgColor="green"
              textColor="green"
              text={healthCheck.status}
              className="mb-1"
            />

            <Typography className="text-sm text-blue-400 mt-1">
              Last Health Check: {ISOToDefaultDateTimeFormat(healthCheck?.time)}
            </Typography>
          </div>
        );
      })}
    </Card>
  );
};

interface Props {
  successfulBreedingEvents?: number;
  fryCount?: number;
  healthChecks?: RecentHealthCheck[];
}

export default BreedingCard;
