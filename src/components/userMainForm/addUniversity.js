import style from "./userMainForm.module.css";
import question from "../media/question.png";
import DOMPurify from "dompurify";
import React from "react";

const thisIsMyCopy = "<span>WTFWTFWTF</span>";

function addUniversity() {
  return (
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(thisIsMyCopy) }}
    ></div>
  );
}

export default addUniversity;
