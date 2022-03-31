import React from "react";

import { twitter, instagram, website } from "./footer.module.css";

import { StaticImage } from "gatsby-plugin-image"

export default function Footer() {
  return (
    <div>
      {/* <a href="">TikTok</a> */}
      <StaticImage src="../data/Footer.jpg" alt="Where the wildflowers grow"/>
      <a href="https://twitter.com/LeifBersweden?s=20&t=lXGzudGG6uwArNGTQlepSw">
        <StaticImage className={twitter} src="../data/twitter.png" alt="Leif's twitter account"/>
      </a>
      <a href="https://www.instagram.com/leifbersweden">
        <StaticImage className={instagram} src="../data/instagram.png" alt="Leif's instagram account"/>
      </a>
      <a href="https://leifbersweden.com">
        <StaticImage className={website} src="../data/internet.png" alt="Leif's website"/>
      </a>
    </div>
  );
}
