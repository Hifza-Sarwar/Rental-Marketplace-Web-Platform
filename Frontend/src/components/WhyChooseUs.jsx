import WhyCard from "./WhyCard";

const features = [
  {
    id: 1,
    icon: "fa-solid fa-tags",
    title: "Affordable Rental Rates",
    description:
      "Find rental items at competitive prices that suit every budget."
  },

  {
    id: 2,
    icon: "fa-solid fa-shield-halved",
    title: "Verified Listings",
    description:
      "Every listing is reviewed to provide a safer and more reliable rental experience."
  },

  {
    id: 3,
    icon: "fa-solid fa-headset",
    title: "Direct Owner Contact",
    description:
      "Connect directly with item owners without unnecessary middlemen or extra fees."
  },

  {
    id: 4,
    icon: "fa-solid fa-bolt",
    title: "Quick & Easy Booking",
    description:
      "Browse, compare and book rental items in just a few simple steps."
  }
];

function WhyChooseUs() {
  return (
    <section className="why-section">

      <h1>
        Why <span>Choose Us</span>?
      </h1>

      <div className="why-container">
        {features.map((feature) => (
          <WhyCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

    </section>
  );
}

export default WhyChooseUs;