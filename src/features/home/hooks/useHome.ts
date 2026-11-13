import { useState } from "react";

const features = [
  {
    number: "01",
    title: "Simple & Intuitive",
    description:
      "Enjoy a clean and intuitive experience designed to make your workflow easier.",
  },
  {
    number: "02",
    title: "Built for Speed",
    description:
      "Work efficiently with a fast and responsive experience across devices.",
  },
  {
    number: "03",
    title: "Flexible & Scalable",
    description: "Start small and expand your workflow as your needs grow.",
  },
];

export function useHome() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  function handleFeatureSelect(featureNumber: string) {
    setActiveFeature(featureNumber);
  }

  return {
    features,
    activeFeature,
    handleFeatureSelect,
  };
}
