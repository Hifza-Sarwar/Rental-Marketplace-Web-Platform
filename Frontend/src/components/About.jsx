import aboutImg from "../assets/about.png";

function About() {
  return (
    <section className="market">

      <div className="col-3">
        <img
          className="one"
          src={aboutImg}
          alt="About RentHub"
        />
      </div>

      <div className="col-4">

        <h1 id="about">
          About <span>us</span>
        </h1>

        <h3>
          World Largest <span>Rental <br /></span> Marketplace
        </h3>

        <p className="text">
          We connect people who need items with those who have them.
          From cars to Fashions, electronics to Furniture- rent anything.
        </p>

        <p className="p1">
  <i className="fa-solid fa-forward-step"></i>
  Verified and trusted rental listings
</p>

<p className="p1">
  <i className="fa-solid fa-forward-step"></i>
  Direct communication with item owners
</p>

<p className="p1">
  <i className="fa-solid fa-forward-step"></i>
  Multiple rental categories in one platform
</p>

<p className="p1">
  <i className="fa-solid fa-forward-step"></i>
  Affordable daily, weekly, and monthly rental options
</p>
        <button>
          Discover more
          <i className="fa-solid fa-arrow-right"></i>
        </button>

      </div>

    </section>
  );
}

export default About;