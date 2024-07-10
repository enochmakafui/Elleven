import pngwingImage from "../assets/images/pngwing 1.png";
import freshbayImage from "../assets/images/freshbay.png";
import securebytesImage from "../assets/images/securebytes.png";
import rehomeImage from "../assets/images/rehome.png";
import atlImage from "../assets/images/atl.png";
import lnugsImage from "../assets/images/lnugs.png";
import "../CSS/ClientSection.css"
const Client = () => {
  return (
    <div className="client">
      <div>
        <h2>The clients we serve</h2>
        <p>We have been privileged to work with some of these awesome brands</p>
      </div>
      <div className="client-img-container">
        <img src={freshbayImage} alt="" className="freshbay-img" />
        <img src={securebytesImage} alt="" className="securebytes-img" />
        <img src={rehomeImage} alt="" className="rehome-img" />
        <img src={atlImage} alt="" className="atl-img" />
        <img src={lnugsImage} alt="" className="lnugs-img" />
        <img src={pngwingImage} alt="" className="navida-img" />
      </div>
    </div>
  );
};

export default Client;
