import React from "react";
import styled from "styled-components";
import service1 from "../images/service1.png";
import service2 from "../images/service2.png";
import service3 from "../images/service3.png";
import service4 from "../images/service4.png";
import service5 from "../images/service5.png";
import service6 from "../images/service6.png";
import service7 from "../images/service7.png";
import service8 from "../images/service8.png";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "User Friendly",
      subTitle:
        "We have Received a Good Response from the Customers and we will carry over till last.",
    },
    {
      icon: service2,
      title: "Travel Guides",
      subTitle:
        "We have all the Adventures that have all the precaution for a safe environment.",
    },
    {
      icon: service3,
      title: "Payment",
      subTitle:
        " Enjoy the flexible payment through our app and get rewards on every payment.",
    },
    {
      icon: service4,
      title: "Best Adventure Near You",
      subTitle:
        "Find the best Adventure you wish to visit near you on that time.",
    },
    {
      icon: service5,
      title: "Offers",
      subTitle:
        "You can't find a better offer than our Comapany.",
    },
    {
      icon: service6,
      title: "Safety Measures",
      subTitle:
        "We will show you the safety measures that should be undertaken before a ride.",
    },
    {
      icon: service7,
      title: "Records",
      subTitle:
        "We have Done a GUINESS RECORD on guiding so many guides to a ride in a Day.",
    },
    {
      icon: service8,
      title: "Couple Adventure",
      subTitle:
        "There are several Adventures some can be for Couples to.",
    },
  ];
  return (
    <Section id="services">
      {data.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3 color="blue">{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  background-color: white;
  
  padding: 2rem 1rem;
  padding-bottom:3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  
  .service {
    h3{
      color:Red;
    }
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
 
`;
