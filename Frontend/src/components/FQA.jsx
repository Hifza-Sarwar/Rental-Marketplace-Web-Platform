import { useState } from "react";

function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Q1. What is RentHub used for?",
      answer:
        "RentHub helps users find and rent items such as homes, cars, furniture, electronics, fashion products, tools, and more."
    },

    {
      question: "Q2. How can I search for rental items?",
      answer:
        "You can browse categories or use the search bar to find rental items based on your needs."
    },

    {
      question: "Q3. Is it free to browse listings?",
      answer:
        "Yes, browsing rental listings is completely free for all users."
    },

    {
      question: "Q4. Can I list my own items for rent?",
      answer:
        "Yes, owners can create listings by adding item details, images, pricing, and availability."
    },

    {
      question: "Q5. Are listings verified?",
      answer:
        "We encourage accurate listings and user verification to provide a more trustworthy rental experience."
    },

    {
      question: "Q6. Can I filter items by price?",
      answer:
        "Yes, users can filter listings according to their preferred price range."
    },

    {
      question: "Q7. Do I need an account to browse listings?",
      answer:
        "No, browsing is available without an account, although some features may require registration."
    }
  ];

  return (
    <section className="FQA">

      <h1>Frequently Asked Question</h1>

      <div className="acordion">

        {faqs.map((faq, index) => (
            <div
  className={`acordion-item ${
    openIndex === index ? "active" : ""
  }`}
  key={index}
>
            <button
              className="accordion-button"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <h3>{faq.question}</h3>

              <span className="icon">+</span>
            </button>

            {openIndex === index && (
              <div className="accordion-content">
                <p>{faq.answer}</p>
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default FAQ;