import React, { useEffect, useState } from "react";

export const SectionOne = () => {

    return (
        <section className="section one">

          <img className="background-triangle desktop" src="/atriangle.svg" />
          <img className="background-triangle mobile" src="/atrianglemobile.svg" />

          <img className="background-phone" src="/aphone4.svg" />
          <img className="triangle" src="triangle.svg" />
          <img className="twosquare" src="2square.svg" />
          <img className="yellowsquare" src="yellowsquare.svg" />
          <p className="one-main-text" >¡Un día soleado, <span className="text-color-yellow" >Alex</span> (13 años)<br />recibió un mensaje de Santi<br />(20 años), un <span className="text-bold" >influencer al<br />que admiraba un montón!</span></p>
        </section>
    )
}