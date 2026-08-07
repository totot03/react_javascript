import "./../css/Viewer.css";
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getEmotionImage } from "../util/get-emotion-image";

const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "보통" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "완전 나쁨" },
];

const Viewer = ({ id, createdDate, content, emotionId }) => {
  console.log(`emotionId = ${emotionId}`)
  const nav = useNavigate();

  const emotionItem = emotionList.find( 
    (item) => String(item.emotionId) === String(emotionId) 
  );

  return (
     <div className="Viewer"> 
      <section className="img_section"> 
        <h4>오늘의 감정</h4> 
        <div className="emotion_img_wrapper"> 
          <img src={getEmotionImage(emotionId)} /> 
          <div>{emotionItem.emotionName}</div> 
        </div> 
      </section> 
      <section className="content_section"> 
        <h4>오늘의 일기</h4> 
        <div className="content_wrapper"> 
          <p>{content}</p> 
        </div> 
      </section> 
    </div>
  );
};

//날짜를 문자열로 변환해주는 함수
function getStringedDate(targetDate) {
  if (!targetDate) return "";
  //yy-mm-dd
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
}

export default Viewer;