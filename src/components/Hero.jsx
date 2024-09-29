import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="hero-container mt-5 d-flex align-items-center justify-content-center"
        style={{ height: "65vh" }}
      >
        <div className="text-center">
          <h1 className="display-4">Welcome to <span style={{fontWeight:"430"}}>ReactX!</span></h1>
          <p className="lead">
            Easily generate dynamic and reusable components for your
            applications.
          </p>

          <div className="cards mt-4 d-flex gap-5">'
          <div class="card w-20">
            <div class="card-body">
              <h5 class="card-title">Pre-built Templates   <span><i className="fas fa-layer-group me-2"></i></span> </h5>
              <p class="card-text">
              Access a variety of pre-built templates to jumpstart your project.
              </p>
            </div>
          </div>

          <div class="card w-20 ">
            <div class="card-body">
              <h5 class="card-title">Streamlined Development <img width="30" className="mx-2 "  src="https://img.icons8.com/ios-filled/50/rocket.png" alt="rocket"/></h5>
              <p class="card-text">
              Reduce development time by focusing on your app's core functionality.
              </p>
            </div>
          </div>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default Hero;
