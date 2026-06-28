import { useRef } from "react";
import "./testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const back_icon_ref = useRef(null);
  const forward_icon_ref = useRef(null);
  const slider = useRef(null);
  const tx = useRef(0);

  const slideForward = () => {
    if (tx.current > -50) {
      back_icon_ref.current.style.backgroundColor = "#212ea0";
      tx.current -= 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;

    if (tx.current === -50) {
      forward_icon_ref.current.style.backgroundColor = "#b4b4b4";
    }
  };

  const slideBackward = () => {
    if (tx.current < 0) {
      forward_icon_ref.current.style.backgroundColor = "#212ea0";
      tx.current += 25;
    }

    slider.current.style.transform = `translateX(${tx.current}%)`;

    if (tx.current === 0) {
      back_icon_ref.current.style.backgroundColor = "#b4b4b4";
    }
  };
  return (
    <div className="testimonials">
      <img
        ref={forward_icon_ref}
        src={next_icon}
        alt="next_icon"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        ref={back_icon_ref}
        src={back_icon}
        alt="back_icon"
        className="back-btn"
        onClick={slideBackward}
      />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user_1" />
                <div>
                  <h3>Emily Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user_2" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user_3" />
                <div>
                  <h3>Emily Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user_4" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
