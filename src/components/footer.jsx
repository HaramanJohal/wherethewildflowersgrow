import React from "react";

import { navLinks } from "./footer.module.css";

export default function Footer() {
  return (
    <div>
      <ul className={navLinks}>
        <li>
          <a href="https://leifbersweden.com">Website</a>
        </li>
        <li>
          <a href="https://twitter.com/LeifBersweden?s=20&t=lXGzudGG6uwArNGTQlepSw">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/leifbersweden">Instagram</a>
        </li>
        <li>
          <p>Tiktok</p>
        </li>
      </ul>
      {/* <a href="">TikTok</a> */}
    </div>
  );
}
