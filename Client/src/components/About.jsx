import React from "react";
import GoogleMap from "./GoogleMap";
import commitment from "./../assets/gifs/commitment.gif";
import community from "./../assets/gifs/community.gif";
import team from "./../assets/gifs/team.gif";
import vision from "./../assets/gifs/vision.gif";
import WebsiteEmbed from "./WebsiteEmbed";

const aboutData = [
  {
    icon: "fa-solid fa-person-chalkboard fa-fade",
    title: "Our Vision",
    text: "At Vajra, we believe in creating a future where technology and sustainability coexist harmoniously. Our vision is to pioneer innovative solutions that empower individuals and businesses to make eco-conscious choices without compromising on quality or performance.",
    image: vision,
  },
  {
    icon: "fa-solid fa-person-chalkboard fa-fade",
    title: "Our Team",
    text: "Our dedicated team at Vajra is a diverse group of visionaries, engineers, and creatives. With a shared passion for sustainable innovation, we work tirelessly to turn our vision into reality. Meet the people behind the Vajra journey.",
    image: team,
  },
  {
    icon: "fa-solid fa-person-chalkboard fa-fade",
    title: "Sustainability Commitment",
    text: "Environmental responsibility is at the core of everything we do. At Vajra, we are committed to minimizing our carbon footprint and supporting global conservation efforts. Learn more about our sustainability initiatives and our promise to protect the planet.",
    image: commitment,
  },
  {
    icon: "fa-solid fa-person-chalkboard fa-fade",
    title: "Community Impact",
    text: "We believe that real change extends beyond our products and services. Discover how Vajra is actively involved in giving back to the communities we serve. Our commitment to social responsibility is a testament to our belief in a better, more equitable world.",
    image: community,
  },
];

export default function About() {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.552270953134!2d78.4665848612719!3d17.405160504402954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e71754bfc7%3A0x768df8cb96fea063!2sHimayatnagar%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1699155826327!5m2!1sen!2sin";

  return (
    <>
      <div className="transactionsection tilt-in-fwd-br">
        <div className="d-flex justify-content-center">
          <div className="transaction-container col-md-12">
            <h3><i class="fa-solid fa-address-card fa-bounce"></i>&nbsp;About Vajra!</h3>
            <hr />
            <div className="d-flex flex-wrap justify-content-around">
              {aboutData.map((item, index) => (
                <div
                  key={index}
                  className="pay-glass-card p-3 m-2 flex-fill tilt-in-fwd-tr aboutcards"
                >
                  <div className="d-flex justify-content-between align-items-center paycard">
                    <div>
                      <i className={`fa-solid ${item.icon}`}></i>
                      &nbsp;
                      <span>{item.title}</span>
                      <br />
                      <p>{item.text}</p>
                    </div>
                    <img src={item.image} alt="" />
                  </div>
                </div>
              ))}
            </div>
            <h3 className="mt-4"><i class="fa-solid fa-map-location-dot fa-bounce"></i>&nbsp;Find Vajra!</h3>
            <hr />
            <GoogleMap src={mapSrc} />

            <h3 className="mt-4"><i class="fa-solid fa-comments fa-bounce"></i>&nbsp;Facing Issues, Welcome to community!</h3>
            <hr />
            <WebsiteEmbed/>
          </div>
        </div>
      </div>
    </>
  );
}
