/* eslint-disable react/prop-types */
import { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./ResumeTemplate2.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaPaperclip,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { CiMail } from "react-icons/ci";

const Resume = forwardRef((props, ref) => {
  const information = props.information;
  const sections = props.sections;
  const [source, setSource] = useState();
  const [target, setTarget] = useState("");

  const [columns, setColumns] = useState([[], []]);

  const containerReference = useRef();

  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievement: information[sections.achievement],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    other: information[sections.other],
  };

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const sectionDiv = {
    [sections.workExp]: (
      <div
        key={"workexp"}
        className={`${styles.section} ${
          info.workExp?.sectionTitle ? "" : styles.hidden
        }`}
        draggable
        onDragOver={() => setTarget(info.workExp?.id)}
        onDragEnd={() => setSource(info.workExp?.id)}
      >
        <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
        <div className={styles.content}>
          {info.workExp?.details?.map((item) => (
            <div className={styles.item} key={item.title}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.companyName ? (
                <p className={styles.subTitle}>{item.companyName}</p>
              ) : (
                <span />
              )}
              {item.certificationLink ? (
                <a className={styles.link} href={item.certificationLink}>
                  <FaPaperclip />
                  {item.certificationLink}
                </a>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <SlCalender /> {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <div />
              )}
              {item.location ? (
                <p className={styles.date}>
                  <FaMapMarkerAlt /> Remote
                </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        key={"project"}
        className={`${styles.section} ${
          info.project?.sectionTitle ? "" : styles.hidden
        }`}
        draggable
        onDragOver={() => setTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
      >
        <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
        <div className={`${styles.content} ${styles.projectBody}`}>
          {info.project?.details?.map((item, index) => (
            <div className={styles.item} key={index}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.link ? (
                <a className={styles.link} href={item.link}>
                  <FaPaperclip />
                  {item.link}
                </a>
              ) : (
                <span />
              )}
              {item.github ? (
                <a className={styles.link} href={item.github}>
                  <FaGithub />
                  {item.github}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className={styles.overview}>{item.overview} </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.education]: (
      <div
        key={"education"}
        className={`${styles.section} ${
          info.education?.sectionTitle ? "" : styles.hidden
        }`}
        draggable
        onDragOver={() => setTarget(info.education?.id)}
        onDragEnd={() => setSource(info.education?.id)}
      >
        <div className={styles.sectionTitle}>
          {info.education?.sectionTitle}
        </div>
        <div className={`${styles.content} ${"educationBody"}`}>
          {info.education?.details?.map((item, index) => (
            <div className={styles.item} key={index}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.college ? (
                <p className={styles.subTitle}>{item.college}</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <SlCalender /> {getFormattedDate(item.startDate)} -
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.achievement]: (
      <div
        key={"achievement"}
        className={`${styles.section} ${
          info.achievement?.sectionTitle ? "" : styles.hidden
        }`}
        draggable
        onDragOver={() => setTarget(info.achievement?.id)}
        onDragEnd={() => setSource(info.achievement?.id)}
      >
        <div className={styles.sectionTitle}>
          {info.achievement?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.achievement?.points?.length > 0 ? (
            <ul className={styles.numbered}>
              {info.achievement?.points?.map((elem, index) => (
                <li className={styles.point} key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
    [sections.summary]: (
      <div
        key={"summary"}
        className={`${styles.section} ${
          info.summary?.sectionTitle ? "" : styles.hidden
        }`}
        draggable
        onDragOver={() => setTarget(info.summary?.id)}
        onDragEnd={() => setSource(info.summary?.id)}
      >
        <div className={styles.sectionTitle}>{info.summary?.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info.summary?.detail}</p>
        </div>
      </div>
    ),
    [sections.other]: (
      <div
        key={"other"}
        className={`${styles.section} ${
          info.other?.sectionTitle ? "" : styles.hidden
        }`}
        draggable
        onDragOver={() => setTarget(info.other?.id)}
        onDragEnd={() => setSource(info.other?.id)}
      >
        <div className={styles.sectionTitle}>{info.other?.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info?.other?.detail}</p>
        </div>
      </div>
    ),
  };

  useEffect(() => {
    setColumns([
      [sections.project, sections.education, sections.summary],
      [sections.workExp, sections.achievement, sections.other],
    ]);
  }, []);

  //swap the source and target
  const swapSourceTarget = (source, target) => {
    if (!source || !target) return;
    const tempColumns = [[...columns[0]], [...columns[1]]];

    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
    }

    //for target also
    let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    let targetColumnIndex = 0;
    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[1].findIndex((item) => item === target);
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];

    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;
    setColumns(tempColumns);
  };

  console.log(`Source - ${source} , Target - ${target}`)

  useEffect(() => {
    if (!source || !target) return;
    swapSourceTarget(source, target);
  }, [source]);

  useEffect(() => {
    const container = containerReference.current;
    if (!props.activeColor || !container) return;

    container.style.setProperty("--color", props.activeColor);
  }, [props.activeColor]);

  return (
    <div ref={ref}>
      <div ref={containerReference} className={styles.container}>
        <div className={styles.header}>
          <p className={styles.heading}>{info.basicInfo?.detail?.name}</p>
          <p className={styles.subHeading}>{info.basicInfo?.detail?.title}</p>

          <div className={styles.links}>
            {info.basicInfo?.detail?.email ? (
              <a className={styles.link} type="email">
                <CiMail /> {info.basicInfo?.detail?.email}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.phone ? (
              <a className={styles.link}>
                <FaPhone /> {info.basicInfo?.detail?.phone}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.linkedin ? (
              <a className={styles.link}>
                <FaLinkedin /> {info.basicInfo?.detail?.linkedin}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.github ? (
              <a className={styles.link}>
                <FaGithub /> {info.basicInfo?.detail?.github}
              </a>
            ) : (
              <span />
            )}
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.col1}>
            {columns[0].map((item) => sectionDiv[item])}
          </div>
          <div className={styles.col2}>
            {columns[1].map((item) => sectionDiv[item])}
          </div>
        </div>
      </div>
    </div>
  );
});

Resume.displayName = "Resume";

export default Resume;
