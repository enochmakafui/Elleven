import XImage from "../assets/images/simple-icons_x.png"
import LinkedInImage from "../assets/images/logo-linkedin.png"
import youtubeImage from "../assets/images/bi_youtube.png"
import facebookImage from "../assets/images/logo-facebook.png"
import InstagramImage from "../assets/images/logo-instagram.png"
const Footer = () => {
  return (
    <div className="footer">
      <div className="about-elleven">
        <h2>Elleven</h2>
        <p>
          Elleven is a leading creative agency in Ghana enanling businesses,
          brands and individuals succeed with compelling visual identities and
          stories.
        </p>
      </div>
      <ul className="menu">
        <p>Menu</p>
        <li>Home</li>
        <li>About</li>
        <li>Our Story</li>
        <li>Our Work</li>
        <li>Blog</li>
      </ul>
      <ul className="services">
        <p>Services</p>
        <li>Brand Strategy & Positioning</li>
        <li>Visual Architecture</li>
        <li>Campaign & Ad Development</li>
        <li>Web & App Design</li>
        <li>Software Development</li>
        <li>Social Media Services</li>
      </ul>
      <div className="copyright">

      <ul className="social-media">
        <li><img src={XImage} alt="Twitter"  /></li>
        <li><img src={LinkedInImage} alt="LinkedIn" /></li>
        <li><img src={youtubeImage} alt="YouTube" /></li>
        <li><img src={facebookImage} alt="Facebook" /></li>
        <li><img src={InstagramImage} alt="Instagram" /></li>
      </ul>
      <small>2024 Elleven. All rights reserved.</small>
      </div>
      <ul className="about">
        <p>About Elleven</p>
        <li>Company</li>
        <li>Teams</li>
        <li>Our Values</li>
        <li>Twitter</li>
      </ul>
    </div>
  );
};

export default Footer;
