import React from "react";
import ReactDOM from "react-dom";

//함수화 시키기
function Avata(props) {
  return <img src={props.user.avatarUrl} alt={props.user.name} />;
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avata user={props.user} />
      <div>{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-text">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "열심히 할수록 기회는 따른다.",
  author: {
    name: "yurim",
    avatarUrl:
      "http://cyr2205.dothome.co.kr/portfolio/assets/images/aboutImg02.jpg",
  },
};

ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />,
  document.getElementById("root")
);
