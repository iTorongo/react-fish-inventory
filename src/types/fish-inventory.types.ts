// Define types for the fish inventory data

type WaterQuality = {
  temperature: number;
  pH: number;
  oxygenLevel: number;
};

export type DiseaseIncident = {
  species: string;
  disease: string;
  status: string;
};

export type RecentFeeding = {
  time: string;
  species: string;
  amount: number;
};

export type GrowthTrends = {
  averageWeight: Record<string, number>;
  averageLength: Record<string, number>;
};

export type RecentHealthCheck = {
  time: string;
  species: string;
  status: string;
};

export type Vaccination = {
  time: string;
  species: string;
  type: string;
};

export type TankOccupancy = {
  currentOccupancy: number;
  isAtCapacity: boolean;
};

export type TankHealth = {
  waterQuality: WaterQuality;
  diseaseIncidents: DiseaseIncident[];
};

export type FishInventory = {
  totalFishPopulation: number;
  speciesDistribution: Record<string, number>;
  tankHealth: Record<string, TankHealth>;
  growthTrends: GrowthTrends;
  feedingSchedule: {
    recentFeedings: RecentFeeding[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deviations: any[]; // Add a proper type if deviations have a specific structure
  };
  breedingStatus: {
    successfulBreedingEvents: number;
    fryCount: number;
  };
  healthMonitoring: {
    recentHealthChecks: RecentHealthCheck[];
    vaccinations: Vaccination[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    treatments: any[]; // Add a proper type if treatments have a specific structure
  };
  mortalityRate: {
    recentDeaths: Array<{
      time: string;
      species: string;
    }>;
    rate: number;
  };
  tankOccupancy: Record<string, TankOccupancy>;
  environmentalConditions: {
    weather: string;
    temperature: number;
    season: string;
  };
};
