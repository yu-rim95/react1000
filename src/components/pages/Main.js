import { func } from "prop-types";
import React from "react";
import Header from "../Header";
import Layout from "../Layout";

// function Main (){
//     return(
//         <div id="wrap">
// <section id="mainCont">
//     <div className="main__cont">
//         <div>We provide</div>
//         <div>visual Coding</div>
//         <div>Solutions</div>
//         <div>For you webs</div>
//     </div>
// </section>
//         </div>
//     );
// }

function Info({ text1, text2, text3, text4 }) {
  return (
    <div className="main__cont">
      <div>{text1}</div>
      <div>{text2}</div>
      <div>{text3}</div>
      <div>{text4}</div>
    </div>
  );
}

function Main() {
  return (
    <div id="wrap">
      <Header />
      <Layout>
        <section id="mainCont">
          <Info
            text1="We provide"
            text2="visual Coding"
            text3="Solutions"
            text4="For you webs"
          />
        </section>
      </Layout>
    </div>
  );
}

export default Main;
