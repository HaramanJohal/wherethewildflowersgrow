import React from "react";

import { chapterHeader } from "./chapterHeader.module.css";

export default function ChapterHeader(props) {
  return (
    <h1 className={chapterHeader}>{`Chapter ${props.chapterNumber}`}<br/>{`${props.chapterName}`}</h1>
  );
}
