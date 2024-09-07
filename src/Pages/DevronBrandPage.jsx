import { useState } from "react";
import badgeArtBoardImage from "../assets/images/DevronBrand_images/BADGEArtboard_1.png";
import bannerImage from "../assets/images/DevronBrand_images/top_banner.png";
import devronArtBoardImage2 from "../assets/images/DevronBrand_images/Devron_NexusArtboard_3.png";
import devronArtBoardImage3 from "../assets/images/DevronBrand_images/Devron_NexusArtboard_4.png";
import devronArtBoardImage4 from "../assets/images/DevronBrand_images/Devron_NexusArtboard_5.png";
import devronArtBoardImage5 from "../assets/images/DevronBrand_images/Devron_NexusArtboard_6.png";
import devronArtBoardImage7 from "../assets/images/DevronBrand_images/Devron_NexusArtboard_8.png";
import devronArtBoardImage8 from "../assets/images/DevronBrand_images/Devron_NexusArtboard_9.png";
import devronArtBoardImage11 from "../assets/images/DevronBrand_images/Devron_NexusArtboard_12.png";
import devronArtBoardImage12 from "../assets/images/DevronBrand_images/Devron_NexusArtboard_13.png";
import devronArtBoardImage13 from "../assets/images/DevronBrand_images/Devron_NexusArtboard_14.png";
import parcelImage from "../assets/images/DevronBrand_images/parcel.png";
import gradientImageBoard2 from "../assets/images/DevronBrand_images/GRADIENTArtboard_2.png";
import dcsVideo from "../assets/Videos/DevronBrand_videos/Dcs.mp4";
import icsVideo from "../assets/Videos/DevronBrand_videos/Ics.mp4";
import socialMediaVideo from "../assets/Videos/DevronBrand_videos/SocialMedia.mp4";
import nextProjectImage from "../assets/images/cal2careBrand_images/next_project.png";
import freshBayImage from "../assets/images/branding_page_images/freshBayBrand.png";
import ImageBox from "../components/ImageBox";
import VideoBox from "../components/VideoBox";
import {motion } from "framer-motion"

const DevronBrandPage = () => {
  const [startProjectMainImageSrc, setStartProjectMainImageSrc] = useState(nextProjectImage);

  const hoverStartProjectSrc = freshBayImage;

  return (
    <div className="start-project-main">
      <ImageBox imageSrc={bannerImage} altText="Devron Brand Banner" />
      <div className=" text-container ">
        <div className="devron-brand brand-box">
          <p>Devron Nexus </p>
          <p>Solutions</p>

          <p
            className="
          devron-brand-text-small
          brand-text-small"
          >
            A Multi-service provider based in Canada and Ghana
          </p>
        </div>

        <div className="description " style={{ fontFamily: "Helvetica Neue" }}>
          In the heart of connection lies Devron Nexus Solution.a multifaceted
          provider, weaving threads of opportunity across travel, digital
          advertising, business, and beyond. Here, the nexus of services bridges
          dreams to reality, guiding aspirations with precision.
        </div>
      </div>
      <ImageBox
        imageSrc={devronArtBoardImage5}
        altText="Devron Brand Artboard"
      />
      <div className=" text-container ">
        <div className="brand-box">
          <p style={{ fontFamily: "Nicholas W01 Bold" }}>The Mark of </p>
          <p style={{ fontFamily: "Nicholas W01 Bold" }}>Devron Nexus </p>
        </div>

        <div className="description">
          The brand identity of Devron Nexus Solution is a visual embodiment of
          its mission. The logo, a symbol of unity and direction, encapsulates
          the essence of connection. It is a beacon for those who seek to
          traverse new paths, knowing that they are guided by a brand that
          understands the power of being connected.
        </div>
      </div>
      <div className="text-container">
        <div>
          <VideoBox videoSrc={dcsVideo} />
        </div>
        <div className="brand-decision-container">
          <span style={{ fontFamily: "Nicholas W01 Bold",fontWeight:700,fontSize:"50px" }}>
            <p className="head" style={{padding:0,margin:0,fontFamily:"Nicholas W01 Bold"}} >
              The Nexus
            </p>
            <p className="head" style={{padding:0,margin:0,fontFamily:"Nicholas W01 Bold"}} >
              Effect
            </p>
          </span>

          <p>
            At the core of Devron Nexus is a powerful truth connection is
            strength. Every service offered is a link in a chain, binding
            clients to their goals with unyielding support. Whether it’s through
            cutting-edge digital advertising travel , study or bespoke business
            consultancy, Devron Nexus empowers with every connection made.
          </p>
        </div>
      </div>
      <ImageBox imageSrc={badgeArtBoardImage} altText="Devron Brand Artboard" />
      <ImageBox
        imageSrc={gradientImageBoard2}
        altText="Devron Brand Artboard"
      />
      <VideoBox videoSrc={icsVideo} />
      <ImageBox
        imageSrc={devronArtBoardImage4}
        altText="Devron Brand Artboard"
      />
      <ImageBox
        imageSrc={devronArtBoardImage2}
        altText="Devron Brand Artboard"
      />
      <ImageBox
        imageSrc={devronArtBoardImage3}
        altText="Devron Brand Artboard"
      />

      <ImageBox
        imageSrc={devronArtBoardImage7}
        altText="Devron Brand Artboard"
      />
      <ImageBox
        imageSrc={devronArtBoardImage8}
        altText="Devron Brand Artboard"
      />
      <ImageBox
        imageSrc={devronArtBoardImage13}
        altText="Devron Brand Artboard"
      />
      <ImageBox
        imageSrc={devronArtBoardImage11}
        altText="Devron Brand Artboard"
      />
      <ImageBox
        imageSrc={devronArtBoardImage12}
        altText="Devron Brand Artboard"
      />
      <div className=" text-container ">
        <div className="brand-box">
          <p>A Symphony of </p>
          <p>Services</p>
        </div>

        <div className="description">
          At Devron Nexus Solution, each service is a note in a symphony of
          success. As the brand designer, I crafted the visual identity that
          ties it all together. From guiding global wanderers to their academic
          dreams to crafting business strategies that propel brands forward,
          every aspect was thoughtfully designed. I also worked on the social
          media posts, ensuring that the brand’s messaging not only resonates
          but also connects deeply with its audience.
        </div>
      </div>

      <VideoBox videoSrc={socialMediaVideo} />

      <ImageBox imageSrc={parcelImage} altText="Devron Brand Artboard" />

     <motion.div className="start-project-main"
        onHoverStart={() => setStartProjectMainImageSrc(hoverStartProjectSrc)}
        onHoverEnd={() => setStartProjectMainImageSrc(nextProjectImage)}
      >

        <ImageBox imageSrc={startProjectMainImageSrc} altText="cal2care picture" />
      </motion.div>
    </div>
  );
};

export default DevronBrandPage;
