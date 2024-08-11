import React, { forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import styles from "./Resume.module.css";
import { SlCalender } from "react-icons/sl";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperclip,
  FaPhone,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const ResumeTemplates2 = forwardRef((props, ref) => {
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

  //   console.log(`Source - ${source} , Target - ${target}`)

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
      <Container ref={containerReference}>
        <Header>
          <Name>{info.basicInfo?.detail?.name}</Name>
          <ContactInfo>
            <ContactInfo>{info.basicInfo?.detail?.title}</ContactInfo>
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
          </ContactInfo>
        </Header>

        <Summary
          className={`${styles.section} ${
            info.summary?.sectionTitle ? "" : styles.hidden
          }`}
        >
          <SectionTitle>{info.summary?.sectionTitle}</SectionTitle>
          <p>{info.summary?.detail}</p>
        </Summary>

        <WorkExperience>
          <SectionTitle
            className={`${styles.section} ${
              info.workExp?.sectionTitle ? "" : styles.hidden
            }`}
          >
            {info.workExp.sectionTitle}
          </SectionTitle>

          <div className="WorkExp">
            {info.workExp?.details?.map((item) => (
              <div className={styles.item} key={item.title}>
                <JobTitle>{item.title}</JobTitle>

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
                <JobDuration>
                  {item.startDate && item.endDate ? (
                    <div className={styles.date}>
                      <SlCalender /> {getFormattedDate(item.startDate)}-
                      {getFormattedDate(item.endDate)}
                    </div>
                  ) : (
                    <div />
                  )}
                </JobDuration>
                {item.location ? (
                  <p className={styles.date}>
                    <FaMapMarkerAlt /> Remote
                  </p>
                ) : (
                  <span />
                )}
                {item.points?.length > 0 ? (
                  <JobDescription className={styles.points}>
                    {item.points?.map((elem, index) => (
                      <ListItem className={styles.point} key={elem + index}>
                        {elem}
                      </ListItem>
                    ))}
                  </JobDescription>
                ) : (
                  <span />
                )}
              </div>
            ))}
          </div>
        </WorkExperience>

        <Education
          className={`${styles.section} ${
            info.education?.sectionTitle ? "" : styles.hidden
          }`}
        >
          <SectionTitle>{info.education?.sectionTitle}</SectionTitle>

          <div className="Education">
            {info.education?.details?.map((item, index) => (
              <div className={styles.item} key={index}>
                {item.title ? (
                  <JobTitle className={styles.title}>{item.title}</JobTitle>
                ) : (
                  <span />
                )}
                {item.college ? (
                  <p className={styles.subTitle}>{item.college}</p>
                ) : (
                  <span />
                )}
                {item.startDate && item.endDate ? (
                  <JobDuration className={styles.date}>
                    <SlCalender /> {getFormattedDate(item.startDate)} -
                    {getFormattedDate(item.endDate)}
                  </JobDuration>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </Education>

        <AdditionalInfo
          className={`${styles.section} ${
            info.achievement?.sectionTitle ? "" : styles.hidden
          }`}
        >
          <SectionTitle>{info.achievement?.sectionTitle}</SectionTitle>

          <div className={styles.content}>
            {info.achievement?.points?.length > 0 ? (
              <ul className={styles.item}>
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
        </AdditionalInfo>

        <AdditionalInfo>
          <div
            key={"summary"}
            className={`${styles.section} ${
              info.summary?.sectionTitle ? "" : styles.hidden
            }`}
            draggable
            onDragOver={() => setTarget(info.summary?.id)}
            onDragEnd={() => setSource(info.summary?.id)}
          >
            <SectionTitle>
              {info.summary?.sectionTitle}
            </SectionTitle>
            <div className={styles.content}>
              <p className={styles.overview}>{info.summary?.detail}</p>
            </div>
          </div>
        </AdditionalInfo>

        <AdditionalInfo>
          <div
            key={"other"}
            className={`${styles.section} ${
              info.other?.sectionTitle ? "" : styles.hidden
            }`}
            draggable
            onDragOver={() => setTarget(info.other?.id)}
            onDragEnd={() => setSource(info.other?.id)}
          >
            <SectionTitle>
              {info.other?.sectionTitle}
            </SectionTitle>
            <div className={styles.content}>
              <p className={styles.overview}>{info?.other?.detail}</p>
            </div>
          </div>
        </AdditionalInfo>
      </Container>
    </div>
  );
});

ResumeTemplates2.displayName = "ResumeTemplates2";

export default ResumeTemplates2;

const Container = styled.div`
  min-width: 700px;
  max-width: 900px;
  margin: 0 auto;
  flex: 1.2;
  height: fit-content;
  min-height: 900px;
  box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

const Name = styled.h1`
  font-size: 36px;
  color: #6a1b9a;
  margin-bottom: 5px;
`;

const ContactInfo = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: #6a1b9a;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
  margin-bottom: 15px;
`;

const Summary = styled.section`
  margin-bottom: 20px;
`;

const WorkExperience = styled.section`
  margin-bottom: 20px;
  .WorkExp {
    display: flex;
    justify-content: space-between;
  }
`;

const Education = styled.section`
  margin-bottom: 20px;
  .Education {
    display: flex;
    justify-content: space-between;
  }
`;

const AdditionalInfo = styled.section`
  margin-bottom: 20px;
  ul {
    letter-spacing: 1px;
  }
  li {
    margin: 1px;
    margin-left: -15px;
  }
`;

const JobTitle = styled.h3`
  font-size: 20px;
  color: #333;
`;

const JobDuration = styled.span`
  font-size: 14px;
  color: #666;
`;

const JobDescription = styled.ul`
  font-size: 16px;
  color: #333;
  list-style-type: disc;
  padding-left: 20px;
  margin: 5px 0 15px 0;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
`;
