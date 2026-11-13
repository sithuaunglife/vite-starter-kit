import { useHome } from "../hooks/useHome";

export function FeatureList() {
  const { features, activeFeature, handleFeatureSelect } = useHome();

  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <button
            key={feature.number}
            type="button"
            aria-pressed={activeFeature === feature.number}
            onClick={() => handleFeatureSelect(feature.number)}
            className={`rounded-xl border p-6 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              activeFeature === feature.number
                ? "border-primary bg-accent"
                : "hover:bg-accent/50"
            }`}
          >
            <span className="text-sm text-muted-foreground">
              {feature.number}
            </span>

            <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {feature.description}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
