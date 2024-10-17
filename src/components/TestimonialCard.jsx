import AvatarImage from "../assets/images/Ellipse 67.png";
import { Star } from "lucide-react";

export default function TestimonialCard() {
  return (
    <div className="testimonial-card">
      <h3 className="testimonial-card-head">Testimonials</h3>
      <h2 >
        What our clients <span className="testimonial-card-said">said</span>
      </h2>
      <div className="testimonial-card-stars">
        <Star fill="#ff7e21" color="#ff7e21"/>
        <Star fill="#ff7e21" color="#ff7e21"/>
        <Star fill="#ff7e21" color="#ff7e21"/>
        <Star fill="#ff7e21" color="#ff7e21"/>
        <Star fill="#ff7e21" color="#ff7e21"/>
        
      </div>
      <p className="testimonial-card-text">
        Avat and his team did a brilliant job on strategy for my company’s
        marketing and branding efforts which led to a dramatic and sharp
        increase in sales as well as a first round pre-seed funding of 20,000
        USD
      </p>
      <div className="profile">
        <img src={AvatarImage} alt="profile image" />
        <div className="profile-about">
          <p>Jonathan Mensah</p>
          <p className="role">CEO of ReHome Africa</p>
        </div>
      </div>
    </div>
  );
}
