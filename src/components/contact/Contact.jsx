import "./contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import Input from "../input/Input";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          Send us a message
          <img src={msg_icon} alt="msg_icon" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="mail_icon" /> contact@devrasen.com
          </li>
          <li>
            <img src={phone_icon} alt="phone_icon" />
            +880 123456789
          </li>
          <li>
            <img src={location_icon} alt="location_icon" />
            Outer Circular Road, Moghbazar, Dhaka - 1217, Bangladesh
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <Input
            label="Your Name"
            type="text"
            placeholder="Enter your name"
            name="name"
          />

          <Input
            label="Your Email"
            type="email"
            placeholder="Enter your email"
            name="email"
          />

          <Input
            lable="Your Phone"
            type="text"
            placeholder="Enter your phone"
            name="phone"
          />

          <label>Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="white_arrow" />
          </button>
        </form>
        <span></span>
      </div>
    </div>
  );
};

export default Contact;
