import CounterCard from "./CounterCard";

const counters = [
  {
    id: 1,
    icon: "fa-solid fa-box-open",
    number: 500,
    title: "Available Rentals"
  },

  {
    id: 2,
    icon: "fa-solid fa-users",
    number: 1200,
    title: "Happy Customers"
  },

  {
    id: 3,
    icon: "fa-solid fa-circle-check",
    number: 800,
    title: "Verified Listings"
  },

  {
    id: 4,
    icon: "fa-solid fa-location-dot",
    number: 30,
    title: "Cities Covered"
  }
];

function Counter() {
  return (
    <section className="counter-section">

     

      <div className="counter">
        {counters.map((item) => (
          <CounterCard
            key={item.id}
            icon={item.icon}
            number={item.number}
            title={item.title}
          />
        ))}
      </div>

    </section>
  );
}

export default Counter; 