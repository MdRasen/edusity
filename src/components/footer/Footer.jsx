import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer" id="footer">
      <p>© {year} devRasen. All rights reserved.</p>
      <ul>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
