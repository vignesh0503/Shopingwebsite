import React, { Fragment } from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import $ from "jquery";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";
import Logo from "./assests/images/Logo.png";
import adidasimg from "./assests/images/adidas.png";
import lacosteimg from "./assests/images/lacoste.png";
import levisimg from "./assests/images/levis.png";
import louisimg from "./assests/images/louis.png";
import lycraimg from "./assests/images/lycra.png";
import pumaimg from "./assests/images/puma.png";
import savingimg from "./assests/images/saving-img.png";
import { TbTruckDelivery } from "react-icons/tb";
import { SiFreecad } from "react-icons/si";
import { FaSuperpowers } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaBars } from "react-icons/fa";

function HomeSection() {
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setBgColor("#243642");
      } else {
        setBgColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // CAROUSEL
  const handleSlideChange = () => {
    console.log("Slide changed");
  };

  const dress = [
    {
      image: "https://m.media-amazon.com/images/I/81ZUL5rCfmL._AC_UY1100_.jpg",
      heading: "Shirt",
      price: "Rupees:$800",
    },
    {
      image:
        "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Written-and-Directed-by-chennai.jpg?v=1662807782",
      heading: "T-Shirt",
      price: "Rupees:$180",
    },
    {
      image:
        "https://www.beyours.in/cdn/shop/files/eveeryday-pant--black--5.jpg?v=1688369505&width=1200",
      heading: "Phant",
      price: "Rupees:$800",
    },
    {
      image: "https://m.media-amazon.com/images/I/81ZUL5rCfmL._AC_UY1100_.jpg",
      heading: "Shorts",
      price: "Rupees:$450",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBolRKY-qLs7dIU84V51kzB80gJ1FyL6uUXMlHIDHmN_Rk-_Klken0cWgfzxSreN0dWwd2zS8ZMgINtw11csHcZ-1t8CatpNiTy_3ygPs",
      heading: "Lycra Phant",
      price: "Rupees:$650",
    },
    {
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6LTnbb10r0Xq9sd0QKOufznsoeETN1GUWnWlvC__TyJ4KjX2o8aXJsfmI1E0Jl9FJqxAMszJkN7Pd5GY4YzHkF9ZK7h1t51iPL_g5jl8XJD0QCuvSrcLz",
      heading: "Track Phant",
      price: "Rupees:$580",
    },
    {
      image:
        "https://images.meesho.com/images/products/449018885/fyrr2_1200.jpg",
      heading: "Lycra Plain Shirt",
      price: "Rupees:$600",
    },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRDkysavdGASgnL86KxjXYF677hw1Bp2YC4DdYuKMJRQD5hndH6QoQSgkiIysLOi2n_esVwmU8akx6Kknxqkpc72bMdtf8VTw",
      heading: "Lycra T-shirt",
      price: "Rupees:$450",
    },
  ];

  const whyCard = [
    {
      icon: <TbTruckDelivery />,
      heading: "Fast Delivery",
      para: "variations of passages of Lorem Ipsum available",
    },
    {
      icon: <SiFreecad />,
      heading: "Free Shipping",
      para: "variations of passages of Lorem Ipsum available",
    },
    {
      icon: <FaSuperpowers />,
      heading: "Best Quality",
      para: "variations of passages of Lorem Ipsum available",
    },
  ];

  return (
    <Fragment>
      {/* NAVBAR */}
      <div
        className="navbar"
        style={{
          backgroundColor: bgColor,
          // backgroundColor: "#0e314c",
          // width: "100%",
          transition: "background-color 0.3s ease",
        }}
      >
        <div className="nav">
          <div>
            <img src={Logo} alt="Logo-img" className="logo" />
          </div>

          <div className="navbar-content">
            <input type="checkbox" id="check" />
            <label for="checkbtn" className="checkbtn">
              <FaBars className="bar-icon" />
            </label>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
                <Link to={"/"}>About</Link>
                <Link to={"/"}>Pages</Link>
                <Link to={"/"}>Shop</Link>
                <Link to={"/"}>Blog</Link>
                <Link to={"/"}>Contact</Link>
                <div className="nav-btn">Support</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* HOME SECTION */}
      <div id="heroSections">
        <div className="heroSection">
          <div className="bg-color">
            <div className="hero-content">
              <div>
                <h1 className="hero-header">Welcome To Our Shop</h1>
                <p className="hero-para">
                  Sequi perspiciatis nulla reiciendis, rem, tenetur impedit,
                  eveniet non necessitatibus error distinctio mollitia suscipit.
                  Nostrum fugit doloribus consequatur distinctio esse, possimus
                  maiores aliquid repellat beatae cum, perspiciatis enim,
                  accusantium perferendis.
                </p>
              </div>
              <div>
                <div className="hero-btn">Contact us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* LOGO SLIDER */}
      <div className="logoSlider rounded">
        <div className="slider">
          <div className="logos">
            <img src={adidasimg} alt="adidas-img" className="logo-slider" />
            <img src={lacosteimg} alt="lacoste-img" className="logo-slider" />
            <img src={levisimg} alt="levis-img" className="logo-slider" />
            <img src={louisimg} alt="louis-img" className="logo-slider" />
            <img src={lycraimg} alt="lycra-img" className="logo-slider" />
            <img src={pumaimg} alt="puma-img" className="logo-slider" />
            <img src={adidasimg} alt="adidas-img" className="logo-slider" />
            <img src={lacosteimg} alt="lacoste-img" className="logo-slider" />
            <img src={levisimg} alt="levis-img" className="logo-slider" />
            <img src={louisimg} alt="louis-img" className="logo-slider" />
            <img src={lycraimg} alt="lycra-img" className="logo-slider" />
            <img src={pumaimg} alt="puma-img" className="logo-slider" />
          </div>
        </div>
      </div>

      {/* CARD SECTION */}

      <div id="card-sections">
        <div className="card-section">
          <div className="card-header">
            <h1>Our Latest Product</h1>
            <div className="bar"></div>
          </div>
          <div className="card">
            {dress.map((item) => (
              <div className="card-content">
                <div className="card-img">
                  <img src={item.image} className="cardimages" alt="img" />
                </div>
                <div className="Card-subcontent">
                  <h3>{item.heading}</h3>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Savings SECTION */}

      <div className="savings-section">
        <div className="saving-img">
          <img src={savingimg} alt="saveimg" className="saveimg" />
        </div>
        <div className="saving-content">
          <h1>Best Savings on new arrivals</h1>
          <p>
            Qui ex dolore at repellat, quia neque doloribus omnis adipisci,
            ipsum eos odio fugit ut eveniet blanditiis praesentium totam non
            nostrum dignissimos nihil eius facere et eaque. Qui, animi
            obcaecati.
          </p>
          <div className="saving-btn">
            <div className="buynow-btn">Buy Now</div>
            <div className="seeMore-btn">See More</div>
          </div>
        </div>
      </div>

      {/* Why SHOP WITH US */}

      <div className="whyShop-sections">
        <div className="card-header">
          <h1>Why Shop With Us</h1>
          <div className="bar"></div>
        </div>
        <div className="whyShop-section">
          {whyCard.map((item) => (
            <div className="whyShop-content">
              <div className="whycard-icons">
                <div className="whycard-icon">{item.icon}</div>
              </div>
              <div className="whycard-subContent">
                <h3>{item.heading}</h3>
                <p>{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONAL */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        at
        once
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        onSlideChange={handleSlideChange} // Log slide changes
      >
        <SwiperSlide>
          <div style={{ height: "300px", backgroundColor: "lightblue" }}>
            <img src={lycraimg} alt="lycra-img" className="logo-slider" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "300px", backgroundColor: "lightcoral" }}>
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "300px", backgroundColor: "lightgreen" }}>
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>

      {/* FOOTER */}

      <div className="footer-section">
        <div className="footer-content">
          <div className="footerSubcontent">
            <h1>About us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doLorem ipsum dolor sit amet,
            </p>
          </div>
          <div className="footerSubcontent">
            <h1>Newsletter</h1>
            <input
              type="email"
              placeholder="Enter an Email"
              className="footer-input"
            />
            <div className="subbtn">
              <button className="sub-btn">Subscribe</button>
            </div>
          </div>
          <div className="footerSubcontent">
            <h1>Need Help</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doLorem ipsum dolor sit amet,
            </p>
          </div>
          <div className="footerSubcontent">
            <h1>CONTACT US</h1>
            <h3>
              <IoLocationOutline />
              <span> Nagercoil</span>
            </h3>
            <h3>
              <CiPhone />
              <span>9087654321</span>
            </h3>
            <h3>
              <CiMail />
              <span>alo@gmail.com</span>
            </h3>
          </div>
        </div>
        <div className="horisontal-line">
          <hr />
        </div>
      </div>
    </Fragment>
  );
}

export default HomeSection;
