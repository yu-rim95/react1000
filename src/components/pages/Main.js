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

function Info({ text }) {
  return <div>{text}</div>;
}

const textInfo = [
  { text: "We provide" },
  { text: "visual Coding" },
  { text: "Solutions" },
  { text: "For you webs" },
];

function Main() {
  return (
    <div id="wrap">
      <Header />
      <Layout>
        <section id="mainCont">
          <div className="main__cont">
            {textInfo.map((el) => (
              <Info text={el.text} key={el.text} />
            ))}
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default Main;
