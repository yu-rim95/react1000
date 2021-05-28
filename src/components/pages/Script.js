import React from "react";
import WrapTitle from "../basics/WrapTitle";
import Header from "../Header";
import Layout from "../Layout";

function ScriptText({ image, title, desc1, desc2 }) {
  return (
    <div className="script__cont__wrap">
      <div className="script__cont__img">
        <img src={image} alt={title}></img>
      </div>
      <div className="script__cont__txt">
        <h2>{title}</h2>
        <p>{desc1}</p>
        <p>{desc2}</p>
        <ul>
          <li>
            <a href="/">1</a>
          </li>
          <li>
            <a href="/">2</a>
          </li>
          <li>
            <a href="/">3</a>
          </li>
          <li>
            <a href="/">4</a>
          </li>
          <li>
            <a href="/">5</a>
          </li>
          <li>
            <a href="/">6</a>
          </li>
          <li>
            <a href="/">7</a>
          </li>
          <li>
            <a href="/">8</a>
          </li>
          <li>
            <a href="/">9</a>
          </li>
          <li>
            <a href="/">10</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const scriptInfo = [
  {
    id: 1,
    image: "../img/video01.png",
    title: "animationRequestFrame",
    desc1:
      "메뉴 테스트 no.1메뉴 테스트 no.1메뉴 테스트 no.1메뉴 테스트 no.1메뉴 테스트 no.1메뉴 테스트 no.1메뉴 테스트 no.1메뉴 테스트 no.1메뉴 테스트 no.1",
    desc2:
      "메뉴 테스트 no.1메뉴 테스트 no.1메뉴 테스트 no.1메뉴 테스트 no.1메뉴 테스트 no.1메뉴 테스트 no.1메뉴 테스트 no.1메뉴 테스트 no.1메뉴 테스트 no.1",
  },
  {
    id: 2,
    image: "../img/video02.png",
    title: "animationRequestFrame",
    desc1: "메뉴 테스트 no.2",
    desc2: "메뉴 테스트 no.2",
  },
  {
    id: 3,
    image: "../img/video01.png",
    title: "animationRequestFrame",
    desc1: "메뉴 테스트 no.3",
    desc2: "메뉴 테스트 no.3",
  },
];
function Script() {
  return (
    <div id="wrap" className="light">
      <Header info="none" />
      <Layout />
      <section id="scriptCont">
        <div className="container">
          <WrapTitle text={["Javascript", "book"]} />
          <div className="script__cont">
            {scriptInfo.map((text) => (
              <ScriptText
                key={text.id}
                image={text.image}
                title={text.title}
                desc1={text.desc1}
                desc2={text.desc2}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Script;
