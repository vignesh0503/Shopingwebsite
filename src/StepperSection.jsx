import React, { Fragment } from "react";

const StepperSection = () => {
  return (
    <Fragment>
      <div className="timeline-section">
        <div className="header">
          <h1>You Have a Job Opportunity</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            faucibus dolor augue, et tincidunt felis varius in.
          </p>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="step-number">01</div>
            <div className="content">
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <h3>Trip Started</h3>
            </div>
          </div>
          <div className="timeline-item">
            <div className="step-number">02</div>
            <div className="content">
              <h3>Batching Completed</h3>
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="step-number">03</div>
            <div className="content">
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <h3>OTP</h3>
            </div>
          </div>
          <div className="timeline-item">
            <div className="step-number">04</div>
            <div className="content">
              <h3>Drop Point Reached</h3>
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="step-number">05</div>
            <div className="content">
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <h3>OTP</h3>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StepperSection;
