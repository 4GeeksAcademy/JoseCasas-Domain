/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "their", "my", "your"];
  let adjective = ["masive", "regular", "fantastic", "large"];
  let noun = ["eagle", "tower", "desk", "telephone"];
  let siteType = [".com", ".net", ".org", ".edu"];

  console.log("Regular for loop:");
  for (let pronounIndex = 0; pronounIndex < pronoun.length; ++pronounIndex) {
    for (let adjIndex = 0; adjIndex < adjective.length; ++adjIndex) {
      for (let nounIndex = 0; nounIndex < noun.length; ++nounIndex) {
        for (
          let siteTypeIndex = 0;
          siteTypeIndex < siteType.length;
          ++siteTypeIndex
        ) {
          console.log(
            `${pronoun[pronounIndex]}${adjective[adjIndex]}${noun[nounIndex]}${siteType[siteTypeIndex]}`
          );
        }
      }
    }
  }

  for (let pronounIndex = 0; pronounIndex < pronoun.length; ++pronounIndex) {
    for (let adjIndex = 0; adjIndex < adjective.length; ++adjIndex) {
      for (let nounIndex = 0; nounIndex < noun.length; ++nounIndex) {
        for (
          let siteTypeIndex = 0;
          siteTypeIndex < siteType.length;
          ++siteTypeIndex
        ) {
          let para = document.createElement("p");
          para.innerHTML = `${pronoun[pronounIndex]}${adjective[adjIndex]}${noun[nounIndex]}${siteType[siteTypeIndex]}`;
          document.getElementById("generator").appendChild(para);
        }
      }
    }
  }
};
