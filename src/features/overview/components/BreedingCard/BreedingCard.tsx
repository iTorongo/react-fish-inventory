import Card from "../../../../components/molecules/Card/Card";

const BreedingCard = ({ successfulBreedingEvents, fryCount }: Props) => {
  return (
    <Card>
      <h4 className="text-xl text-slate-400">Breeding Status</h4>
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
    </Card>
  );
};

interface Props {
  successfulBreedingEvents?: number;
  fryCount?: number;
}

export default BreedingCard;
