import axios from "axios";
import React from "react";
import Loading from "../basics/Loading";
import Header from "../Header";
import Layout from "../Layout";
import Footer from "../Footer";
import WrapTitle from "../basics/WrapTitle";
import ReferInfo from "../basics/ReferInfo";
//import { Link } from "react-router-dom";
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
//     desc: "align-content 속성은 플렉스 아이템의 상하 정렬을 설정합니다.",
//   },
//   {
//     alpha: "A",
//     attr: "align-content2",
//     desc: "align-content 속성은 플렉스 아이템의 상하 정렬을 설정합니다.",
//   },
//   {
//     alpha: "A",
//     attr: "align-content3",
//     desc: "align-content 속성은 플렉스 아이템의 상하 정렬을 설정합니다.",
//   },
//   {
//     alpha: "A",
//     attr: "align-content4",
//     desc: "align-content 속성은 플렉스 아이템의 상하 정렬을 설정합니다.",
//   },
//   {
//     alpha: "A",
//     attr: "align-content5",
//     desc: "align-content 속성은 플렉스 아이템의 상하 정렬을 설정합니다.",
//   },
// ];
// function Reference() {
//   return (
// <div id="wrap" className="light">
//   <Header info="none" />
//   <Layout>
//     <section id="referCont">
//       <div className="container">
//         <WrapTitle text={["HTML", "reference"]} />
//         <div className="refer-cont">
//           <div className="refer-table">
//             <h3>CSS Reference</h3>
//             <ul>
//               {referAttr.map((text) => (
//                 <ReferText
//                   key={text.attr}
//                   alpha={text.alpha}
//                   attr={text.attr}
//                   desc={text.desc}
//                 />
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   </Layout>
//   <Footer />
//     </div>
//   );
// }
class Reference extends React.Component {
  state = {
    isLoading: true,
    refers: [],
  };
  getRefer = async () => {
    const {
      data: {
        data: { htmlRefer },
      },
    } = await axios.get(
      "https://yu-rim95.github.io/react1000/src/json/reference.json"
    );
    //console.log(htmlRefer);
    this.setState({ htmlRefer, isLoading: false });
  };
  componentDidMount() {
    setTimeout(() => {
      //this.setState({ isLoading: false });
      this.getRefer();
    }, 3000);
  }
  render() {
    const { isLoading, htmlRefer } = this.state;
    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div id="wrap" className="light">
            <Header info="none" />
            <Layout>
              <section id="referCont">
                <div className="container">
                  <WrapTitle text={["HTML", "reference"]} />
                  <div className="refer-cont">
                    <div className="refer-table">
                      <h3>CSS Reference</h3>
                      <ul>
                        {htmlRefer.map((refer) => (
                          <ReferInfo
                            alpha={refer.alpha}
                            attr={refer.attr}
                            desc={refer.desc}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </Layout>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
export default Reference;
