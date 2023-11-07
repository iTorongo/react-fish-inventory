import Card from "../../../../components/molecules/Card/Card";

const TotalFishCard = ({ totalFish }: Props) => {
  return (
    <Card>
      <div className="flex items-end justify-between">
        <div>
          <h4 className="text-xl text-slate-400 mb-3">Total Fish Population</h4>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {totalFish}
          </h4>
        </div>
      </div>
    </Card>
  );
};

interface Props {
  totalFish?: number;
}

export default TotalFishCard;
