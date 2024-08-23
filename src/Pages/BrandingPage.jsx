import cal2careImage from "../assets/images/branding-page-images/cal2careBrand.png";
import edgeTellurImage from "../assets/images/branding-page-images/EdgeTellurBrand.png";
import freshBayImage from "../assets/images/branding-page-images/freshBayBrand.png";
import { NavLink } from "react-router-dom";
const BrandingPage = () => {
  return (
    <div className="branding-page">
      <h2>
        We have worked on some delightful brand identities in recent years and
        here are a few
      </h2>
      <div>
        <NavLink to="/calcare-brand">
          <img src={cal2careImage} alt="cal2care image" />
        </NavLink>
      </div>
      <div>
        <img src={edgeTellurImage} alt="edge tellur image" />
      </div>
      <div>
        <img src={freshBayImage} alt="fresh bay image" />
      </div>
    </div>
  );
};

export default BrandingPage;
