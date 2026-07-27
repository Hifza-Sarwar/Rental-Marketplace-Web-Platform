function Contact() {
    return (
      <section className="contact-section">
  
        <div className="contact-hero">
          <h1>Contact Us</h1>
  
          <p>
            Have questions about rentals, bookings, or listings?
            Our team is here to help you anytime.
          </p>
        </div>
  
        <div className="contact-container">
  
          <div className="contact-info">
  
            <div className="info-box">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h3>Address</h3>
                <p>Muridke, Punjab, Pakistan</p>
              </div>
            </div>
  
            <div className="info-box">
              <i className="fa-solid fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+92 300 1234567</p>
              </div>
            </div>
  
            <div className="info-box">
              <i className="fa-solid fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>support@rentify.com</p>
              </div>
            </div>
  
            <div className="info-box">
              <i className="fa-solid fa-clock"></i>
              <div>
                <h3>Working Hours</h3>
                <p>Monday - Saturday: 9AM - 8PM</p>
              </div>
            </div>
  
          </div>
  
          <div className="contact-form">
  
            <h2>Send Message</h2>
  
            <form>
  
              <input
                type="text"
                placeholder="Full Name"
                required
              />
  
              <input
                type="email"
                placeholder="Email Address"
                required
              />
  
              <input
                type="text"
                placeholder="Phone Number"
              />
  
              <input
                type="text"
                placeholder="Subject"
              />
  
              <textarea
                placeholder="Your Message"
              ></textarea>
  
              <button type="submit">
                Send Message
              </button>
  
            </form>
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default Contact;