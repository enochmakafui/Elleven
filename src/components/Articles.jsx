import "../CSS/Article.css"
import firstImage from "../assets/images/Rectangle 306 (2).png";
import secondImage from "../assets/images/Rectangle 306 (3).png";
import thirdImage from "../assets/images/Rectangle 306 (4).png";
import fouthImage from "../assets/images/Rectangle 306 (5).png";


const Articles = () => {
return (
    <div className="articles">
        <h2 className="article-head">More Articles</h2>
        <ul className="article-items">
            <li>
                <img src={firstImage} alt="food" />
                <p className="article-title">The Business of Design</p>
                <small className="article-author">Richmond Aryeh</small>
            </li>
            <li>
                <img src={secondImage} alt="food" />
                <p className="article-title">UX Research 101</p>
                <small className="article-author">Richmond Aryeh</small>
            </li>
            <li>
                <img src={thirdImage} alt="food" />
                <p className="article-title">Colours in UI Design</p>
                <small className="article-author">Joseph Sa-Ambo</small>
            </li>
            <li>
                <img src={fouthImage} alt="food" />
                <p className="article-title">Client Relationships</p>
                <small className="article-author">Joseph Sa-Ambo</small>
            </li>
        </ul>
    </div>
);
};

export default Articles;
