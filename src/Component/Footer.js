import React from "react";
import Instagram from "../images/instagram.png";
import Facebok from "../images/facebok.png";
import Twiter from "../images/twiter.png";

const Footer = () => {
  return (
    <div>
      <h1 class="text-white font-sans text-2xl mt-32"> Follow Me On</h1>

      <div class="flex float=left border border-white rounded-xl w-4/6 border-2 space-x-12 ">
        <a
          href="https://www.instagram.com/pudasaini.ujwal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="w-20 h-20" src={Instagram} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100006990496756"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="w-20 h-20" src={Facebok} />
        </a>
        <a
          href="https://twitter.com/pudasaini_ujwal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="w-20 h-20" src={Twiter} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
