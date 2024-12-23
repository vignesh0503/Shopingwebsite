import React, { Fragment, useState, useRef, useEffect } from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import tshirt from "./assests/images/TShirt.jpg";
const MyorderSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  const stepsConfig = [
    {
      name: "LOGIN",
      Component: () => (
        <div className="login-card">
          <form className="delivery-details">
            <input type="text" placeholder="Enter Your name" />
            <input type="number" placeholder="Enter Your Number " />
          </form>
          {/* <div className="checkOut-btn">Continue checkout </div> */}
        </div>
      ),
    },
    {
      name: "Delivery Address",
      Component: () => (
        <div className="address-card">
          <form className="address-details">
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="10-Digit Mobile Number" />
            <input type="number" placeholder="Pincode" />
            <input type="text" placeholder="Locality" />
            <input type="Textarea" placeholder="Address" />
            <input type="text" placeholder="City/Distric/Town" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="Landmark" />
            <input type="number" placeholder="Alternate Phone Number" />
          </form>
        </div>
      ),
    },
    {
      name: "Order Summary",
      Component: () => (
        <div>
          <div className="ordercard">
            <div style={{ display: "flex" }}>
              <img src={tshirt} alt="Tshirt-img" className="orderpic" />
              <div>
                <h3>T-Shirt</h3>
                <p>Size:40</p>
                <h3>$350</h3>
              </div>
            </div>
            <p>Your Order conformation email will be sent to vicky@gmail.com</p>
          </div>
        </div>
      ),
    },
    {
      name: "Payment Options",
      Component: () => <div>Your Order Has Been Placed</div>,
    },
  ];

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth,
    });
  }, [stepsConfig.length]);
  if (!stepsConfig.length) {
    return <></>;
  }
  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const calculateProgressVarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };
  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;
  return (
    <Fragment>
      <div className="stepper">
        {stepsConfig.map((step, index) => (
          <div
            key={index}
            ref={(el) => (stepRef.current[index] = el)}
            className={`step ${
              currentStep > index + 1 || isComplete ? "complete" : ""
            } ${currentStep === index + 1 ? "active" : ""}`}
          >
            <div className="step-number">
              {currentStep > index + 1 || isComplete ? (
                <span>
                  <IoCheckmarkDoneCircleSharp />
                </span>
              ) : (
                index + 1
              )}
            </div>
            <div className="step-name">{step.name}</div>
          </div>
        ))}
        <div
          className="progress-bar"
          // style={{
          //   width: `calc(100%-${margins.marginLeft + margins.marginRight}px)`,
          //   marginLeft: margins.marginLeft,
          //   marginRight: margins.marginRight,
          // }}
          style={{
            marginLeft: `${margins.marginLeft}px`,
            marginRight: `${margins.marginRight}px`,
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateProgressVarWidth()}%` }}
          ></div>
        </div>
      </div>
      <ActiveComponent />
      <button className="checkOut-btn" onClick={handleNext}>
        {currentStep === stepsConfig.length ? "Finish" : "Cotinue Checkout"}
      </button>
    </Fragment>
  );
};

export default MyorderSection;
