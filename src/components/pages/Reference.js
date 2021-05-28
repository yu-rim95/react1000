import React from "react";
// import Header from "../Header";
// import Layout from "../Layout";
// import WrapTitle from "../basics/WrapTitle";
// import Footer from "../Footer";
// import { Link } from "react-router-dom";

// function ReferText({ alpha, attr, desc }) {
//   return (
//     <li>
//       <Link to="/">
//         <span className="alpha">{alpha}</span>
//         <span className="attr">{attr}</span>
//         <span className="desc">{desc}</span>
//       </Link>
//     </li>
//   );
// }

// const referAttr = [
//   {
//     alpha: "A",
//     attr: "align-content1",
//     desc: "align-content 속성은 콘텐츠의 상하관계 정렬 상태를 정의합니다.",
//   },
//   {
//     alpha: "A",
//     attr: "align-content2",
//     desc: "align-content 속성은 콘텐츠의 상하관계 정렬 상태를 정의합니다.",
//   },
//   {
//     alpha: "A",
//     attr: "align-content3",
//     desc: "align-content 속성은 콘텐츠의 상하관계 정렬 상태를 정의합니다.",
//   },
//   {
//     alpha: "A",
//     attr: "align-content4",
//     desc: "align-content 속성은 콘텐츠의 상하관계 정렬 상태를 정의합니다.",
//   },
// ];

// function Reterence() {
//   return (
//     <div id="wrap" className="light">
//       <Header info="none" />
//       <Layout>
//         <section id="referCont">
//           <div className="container">
//             <WrapTitle text={["HTML", "reterence"]} />
//             <div className="refer-cont">
//               <div className="refer-table">
//                 <h3>CSS Reterence</h3>
//                 <ul>
//                   {referAttr.map((text) => (
//                     <ReferText
//                       key={text.attr}
//                       alpha={text.alpha}
//                       attr={text.attr}
//                       desc={text.desc}
//                     />
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>
//       </Layout>
//       <Footer />
//     </div>
//   );
// }

class Reference extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    //사이트가 로딩이다끝나면 실행시키라는 함수
    //setState는 상태가 바뀌는 state
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "로딩중...." : "준비되었습니다...."}</div>;
  }
}

export default Reference;
