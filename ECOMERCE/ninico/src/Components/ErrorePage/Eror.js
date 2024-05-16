import React from "react";
import Headers from "../Header/Head"
import Nav from "../Nav/Nav";
import Fotter from "../Fotter/Fotter";
import ErrorLogo from "../Assate/error.png";
import PageHeading from "../PageHeading/PageHeading"

import '../ErrorePage/Error.css'

function ErrorPage() {
  return (
    <section className="mx-auto">
      <Headers/>
      <Nav/>
      <PageHeading name="Error"  />


      <div className="Error-Body py-20">

        <div className="Error-Logo">
          <img src={ErrorLogo} alt="Error-img" className="block mx-auto object-contain" />
        </div>

        <div className="Error-heading text-center ">

          <h1 className="font-bold">404. Page not found</h1>

          <p className="mb-10">
            Sorry, we couldn’t find the page you where looking for. We suggest
            that <br /> you return to homepage.
          </p>

          <button className="Back-HomeBtn transition-all flex items-center justify-evenly mx-auto">
            <i className="fa-solid fa-arrow-left-long"></i>
            Back To Home
          </button>

        </div>
      </div>
      <Fotter/>
    </section>
  );
}

export default ErrorPage;