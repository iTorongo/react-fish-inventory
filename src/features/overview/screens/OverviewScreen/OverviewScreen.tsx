import { Loader } from "../../../../components/atoms";
import { useFishInventory } from "../../../../hooks/useFishInventory";
import BreedingCard from "../../components/BreedingCard/BreedingCard";
import EnvironmentCard from "../../components/EnvironmentCard/EnviromentCard";
import TankHealthCard from "../../components/TankHealthCard/TankHealthCard";
import TotalFishCard from "../../components/TotalFishCard/TotalFishCard";

const OverViewScreen = () => {
  const { data: fishInventoryResponse, isLoading } = useFishInventory();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <TotalFishCard
          totalFish={fishInventoryResponse?.data?.totalFishPopulation}
        />
        <BreedingCard
          successfulBreedingEvents={
            fishInventoryResponse?.data.breedingStatus?.successfulBreedingEvents
          }
          fryCount={fishInventoryResponse?.data.breedingStatus?.fryCount}
          healthChecks={
            fishInventoryResponse?.data.healthMonitoring.recentHealthChecks
          }
        />
        <TankHealthCard
          tank1={fishInventoryResponse?.data.tankHealth.tank1}
          tank2={fishInventoryResponse?.data.tankHealth.tank2}
        />
        <EnvironmentCard
          {...fishInventoryResponse?.data.environmentalConditions}
        />
      </div>
    </>
  );
};

export default OverViewScreen;
