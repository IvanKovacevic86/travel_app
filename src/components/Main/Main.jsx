import React, { useEffect } from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img from "../../Assets/img.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zeland",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Fingerstache jianbing kale chips, pickled fixie VHS put a bird on it prism solarpunk vexillologist slow-carb yes plz pop-up. Franzen wolf whatever jawn. Marxism glossier try-hard af gastropub tumeric freegan JOMO DSA. ",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "Fingerstache jianbing kale chips, pickled fixie VHS put a bird on it prism solarpunk vexillologist slow-carb yes plz pop-up. Franzen wolf whatever jawn. Marxism glossier try-hard af gastropub tumeric freegan JOMO DSA. ",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Fingerstache jianbing kale chips, pickled fixie VHS put a bird on it prism solarpunk vexillologist slow-carb yes plz pop-up. Franzen wolf whatever jawn. Marxism glossier try-hard af gastropub tumeric freegan JOMO DSA. ",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "Fingerstache jianbing kale chips, pickled fixie VHS put a bird on it prism solarpunk vexillologist slow-carb yes plz pop-up. Franzen wolf whatever jawn. Marxism glossier try-hard af gastropub tumeric freegan JOMO DSA. ",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fees: "$1100",
    description:
      "Fingerstache jianbing kale chips, pickled fixie VHS put a bird on it prism solarpunk vexillologist slow-carb yes plz pop-up. Franzen wolf whatever jawn. Marxism glossier try-hard af gastropub tumeric freegan JOMO DSA. ",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "$840",
    description:
      "Fingerstache jianbing kale chips, pickled fixie VHS put a bird on it prism solarpunk vexillologist slow-carb yes plz pop-up. Franzen wolf whatever jawn. Marxism glossier try-hard af gastropub tumeric freegan JOMO DSA. ",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Fingerstache jianbing kale chips, pickled fixie VHS put a bird on it prism solarpunk vexillologist slow-carb yes plz pop-up. Franzen wolf whatever jawn. Marxism glossier try-hard af gastropub tumeric freegan JOMO DSA. ",
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      "Fingerstache jianbing kale chips, pickled fixie VHS put a bird on it prism solarpunk vexillologist slow-carb yes plz pop-up. Franzen wolf whatever jawn. Marxism glossier try-hard af gastropub tumeric freegan JOMO DSA. ",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Fingerstache jianbing kale chips, pickled fixie VHS put a bird on it prism solarpunk vexillologist slow-carb yes plz pop-up. Franzen wolf whatever jawn. Marxism glossier try-hard af gastropub tumeric freegan JOMO DSA. ",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {Data.map((data) => {
          return (
            <div key={data.id} data-aos="fade-up" className="singleDestination">
              <div className="imageDiv">
                <img src={data.imgSrc} alt={data.destTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{data.destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{data.location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {data.grade}
                      <small>+1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>{data.fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{data.description}</p>
                </div>
                <button className="btn flex">
                  DETAilS <HiOutlineClipboardCheck className="icon" />{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
