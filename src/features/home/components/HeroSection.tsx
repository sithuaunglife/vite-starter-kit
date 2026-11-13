import { UserCard } from "../../../components/UserCard";

export function HeroSection() {
  return (
    <section className="px-6 py-24 text-center">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold sm:text-6xl">
          Build something extraordinary.
        </h1>

        <p className="mt-6 text-muted-foreground">
          Everything you need to get started and bring your ideas to life.
        </p>

        <a
          href="#features"
          className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 text-primary-foreground"
        >
          Explore Features
        </a>

        {/* Reusable User Card */}
        <div className="mx-auto mt-12 max-w-sm text-left">
          <UserCard
            name="John Smith"
            email="john@example.com"
            role="Frontend Developer"
          />
        </div>
      </div>
    </section>
  );
}
