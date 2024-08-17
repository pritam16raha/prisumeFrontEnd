import React, { useEffect, useRef, useState } from "react";
import Editor from "../editor/Editor";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import Resume from "../resume/Resume";
import styled from "styled-components";
import styles from "./Body.module.css";
import ResumeTemplates2 from "../resume/ResumeTemplates2";
import ResumeTemplates4 from "../resume/ResumeTemplates4";
import ResumeTemplates3 from "../resume/ResumeTemplates3";
import ResumeTemplates5 from "../resume/ResumeTemplates5";

const Body = () => {
  const colors = [
    "#239ce2",
    "#48bb78",
    "#0bc5ea",
    "#a0aec0",
    "#ed8936",
    "#000",
    "#0b07d8",
    "#500000",
  ];

  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);

  const [currentTemplates, setCurrentTemplates] = useState("firstResume");

  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  useEffect(() => {
    console.log(resumeInformation);
  }, [resumeInformation]);

  return (
    <div className={styles.main}>
      <Main>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />

        <div className={styles.colors}>
          {/* <h2>Text:</h2> */}
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${
                activeColor === item ? styles.active : ""
              }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>

        <div className="templateButton">
          <button onClick={() => setCurrentTemplates("firstResume")}>Template 1</button>
          <button onClick={() => setCurrentTemplates("secondResume")}>Template 2</button>
          <button onClick={() => setCurrentTemplates("thirdResume")}>Template 3</button>
          <button onClick={() => setCurrentTemplates("forthResume")}>Template 4</button>
          <button onClick={() => setCurrentTemplates("fifthResume")}>Template 5</button>
        </div>

        <div>
          {currentTemplates === "firstResume" && (
            <Resume
              ref={resumeRef}
              sections={sections}
              information={resumeInformation}
              activeColor={activeColor}
            />
          )}
          {currentTemplates === "secondResume" && (
            <ResumeTemplates2
              ref={resumeRef}
              sections={sections}
              information={resumeInformation}
              activeColor={activeColor}
            />
          )}
          {currentTemplates === "thirdResume" && (
            <ResumeTemplates3
              ref={resumeRef}
              sections={sections}
              information={resumeInformation}
              activeColor={activeColor}
            />
          )}
          {currentTemplates === "forthResume" && (
            <ResumeTemplates4
              ref={resumeRef}
              sections={sections}
              information={resumeInformation}
              activeColor={activeColor}
            />
          )}
          {currentTemplates === "fifthResume" && (
            <ResumeTemplates5
              ref={resumeRef}
              sections={sections}
              information={resumeInformation}
              activeColor={activeColor}
            />
          )}


        </div>

        {/* <ReactToPrint
          trigger={() => {
            return (
              <button className="resume-button">
                {" "}
                Download <ArrowDown />{" "}
              </button>
            );
          }}
          content={() => resumeRef.current}
        /> */}
      </Main>
    </div>
  );
};

export default Body;

const Main = styled.div`
  display: grid;
  /* flex-direction: column; */
  /* gap: 30px; */
  /* width: 100%; */

  h2 {
    margin: 0;
    /* margin-top: 0; */
  }

  .resume-button {
    width: full;
    margin: auto;
    cursor: pointer;
  }

  .templateButton{
    margin: auto;
    button{
      min-height: 50px;
      min-width: 100px;
      margin: 10px;
      border-radius: 10px;

      &:hover{
        cursor: pointer;
        transform: scale(0.9);
        background-color: #a1cecc;
        transition: all 0.5s ease;
      }
    }
  }
`;
