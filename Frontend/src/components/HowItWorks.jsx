import WorkCard from "./WorkCard";

const steps = [
  {
    id: 1,
    icon: "fa-solid fa-magnifying-glass",
    title: "Search",
    description:
      "Search for items you need from various categories and locations."
  },

  {
    id: 2,
    icon: "fa-solid fa-house",
    title: "View Details",
    description:
      "Check images, features and pricing before choosing."
  },

  {
    id: 3,
    icon: "fa-solid fa-phone",
    title: "Contact Owner",
    description:
      "Connect directly with the property owner."
  },

  {
    id: 4,
    icon: "fa-solid fa-key",
    title: "Rent",
    description:
      "Confirm the booking and schedule your rental period."
  }
];

function HowItWorks() {
  return (
    <section className="working">

      <h1>
        How it <span>works</span>?
      </h1>

      <div className="work-container">
        {steps.map((step) => (
          <WorkCard
            key={step.id}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>

    </section>
  );
}

export default HowItWorks;