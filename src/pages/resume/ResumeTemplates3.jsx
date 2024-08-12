import { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./ResumeTemplate3.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaPaperclip,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import styled from "styled-components";

const ResumeTemplates3 = forwardRef((props, ref) => {
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
      <Section
        key={"workexp"}
        className={`${info.workExp?.sectionTitle ? "" : styles.hidden}`}
        draggable
        onDragOver={() => setTarget(info.workExp?.id)}
        onDragEnd={() => setSource(info.workExp?.id)}
      >
        <SectionTitle>{info.workExp.sectionTitle}</SectionTitle>
        <SectionContent>
          {info.workExp?.details?.map((item) => (
            <div className={styles.item} key={item.title}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.companyName ? (
                <ItemTitle>{item.companyName}</ItemTitle>
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
                <ItemDuration>
                  <SlCalender /> {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </ItemDuration>
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
        </SectionContent>
      </Section>
    ),
    [sections.project]: (
      <Section
        key={"project"}
        className={`${styles.section} ${
          info.project?.sectionTitle ? "" : styles.hidden
        }`}
        draggable
        onDragOver={() => setTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
      >
        <SectionTitle className={styles.sectionTitle}>
          {info.project.sectionTitle}
        </SectionTitle>
        <SectionContent>
          {info.project?.details?.map((item, index) => (
            <item className={styles.item} key={index}>
              {item.title ? (
                <ItemTitle className={styles.title}>{item.title}</ItemTitle>
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
                <ItemDescription className={styles.overview}>
                  {item.overview}{" "}
                </ItemDescription>
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
            </item>
          ))}
        </SectionContent>
      </Section>
    ),
    [sections.education]: (
      <Section
        key={"education"}
        className={`${styles.section} ${
          info.education?.sectionTitle ? "" : styles.hidden
        }`}
        draggable
        onDragOver={() => setTarget(info.education?.id)}
        onDragEnd={() => setSource(info.education?.id)}
      >
        <SectionTitle className={styles.sectionTitle}>
          {info.education?.sectionTitle}
        </SectionTitle>
        <SectionContent>
          {info.education?.details?.map((item, index) => (
            <div className={styles.item} key={index}>
              {item.title ? (
                <ItemTitle className={styles.title}>{item.title}</ItemTitle>
              ) : (
                <span />
              )}
              {item.college ? (
                <p className={styles.subTitle}>{item.college}</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <ItemDuration className={styles.date}>
                  <SlCalender /> {getFormattedDate(item.startDate)} -
                  {getFormattedDate(item.endDate)}
                </ItemDuration>
              ) : (
                ""
              )}
            </div>
          ))}
        </SectionContent>
      </Section>
    ),
    [sections.achievement]: (
      <Section
        key={"achievement"}
        className={`${styles.section} ${
          info.achievement?.sectionTitle ? "" : styles.hidden
        }`}
        draggable
        onDragOver={() => setTarget(info.achievement?.id)}
        onDragEnd={() => setSource(info.achievement?.id)}
      >
        <SectionTitle className={styles.sectionTitle}>
          {info.achievement?.sectionTitle}
        </SectionTitle>
        <SectionContent>
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
        </SectionContent>
      </Section>
    ),
    [sections.summary]: (
      <Section
        key={"summary"}
        className={`${styles.section} ${
          info.summary?.sectionTitle ? "" : styles.hidden
        }`}
        draggable
        onDragOver={() => setTarget(info.summary?.id)}
        onDragEnd={() => setSource(info.summary?.id)}
      >
        <SectionTitle className={styles.sectionTitle}>
          {info.summary?.sectionTitle}
        </SectionTitle>
        <SectionContent className={styles.content}>
          <p className={styles.overview}>{info.summary?.detail}</p>
        </SectionContent>
      </Section>
    ),
    [sections.other]: (
      <Section
        key={"other"}
        className={`${styles.section} ${
          info.other?.sectionTitle ? "" : styles.hidden
        }`}
        draggable
        onDragOver={() => setTarget(info.other?.id)}
        onDragEnd={() => setSource(info.other?.id)}
      >
        <SectionTitle className={styles.sectionTitle}>
          {info.other?.sectionTitle}
        </SectionTitle>
        <SectionContent className={styles.content}>
          <ItemDescription className={styles.overview}>
            {info?.other?.detail}
          </ItemDescription>
        </SectionContent>
      </Section>
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

  console.log(`Source - ${source} , Target - ${target}`);

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
    <Container>
      <Header>
        <NameSection>
          <Name>{info.basicInfo?.detail?.name}</Name>
          <Title>{info.basicInfo?.detail?.title}</Title>
        </NameSection>
        <ContactInfo>
          {info.basicInfo?.detail?.email ? (
            <ContactItem type="email">
              <CiMail /> {info.basicInfo?.detail?.email}
            </ContactItem>
          ) : (
            <span />
          )}

          {info.basicInfo?.detail?.phone ? (
            <ContactItem>
              <FaPhone /> {info.basicInfo?.detail?.phone}
            </ContactItem>
          ) : (
            <span />
          )}

          {info.basicInfo?.detail?.linkedin ? (
            <ContactItem>
              <FaLinkedin /> {info.basicInfo?.detail?.linkedin}
            </ContactItem>
          ) : (
            <span />
          )}

          {info.basicInfo?.detail?.github ? (
            <ContactItem>
              <FaGithub /> {info.basicInfo?.detail?.github}
            </ContactItem>
          ) : (
            <span />
          )}
        </ContactInfo>
      </Header>

      <Section>
        <SectionContent>
          <div className={styles.main}>
            <div className={styles.col1}>
              {columns[0].map((item) => sectionDiv[item])}
            </div>
            <div className={styles.col2}>
              {columns[1].map((item) => sectionDiv[item])}
            </div>
          </div>
        </SectionContent>
      </Section>
    </Container>
  );
});

ResumeTemplates3.displayName = "ResumeTemplates3";

export default ResumeTemplates3;

const Container = styled.div`
  min-width: 900px;
  max-width: 900px;
  margin: 0 auto;
  flex: 1.2;
  height: fit-content;
  min-height: 900px;
  box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.1);
  gap: 30px;
  padding: 30px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  margin: auto;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

const NameSection = styled.div`
  font-size: 24px;
`;

const Name = styled.h1`
  font-size: 36px;
  margin: 0;
`;

const Title = styled.p`
  font-size: 18px;
  margin: 0;
  color: #666;
`;

const ContactInfo = styled.div`
  text-align: right;
`;

const ContactItem = styled.p`
  margin: 5px 0;
  font-size: 14px;
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: #333;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 15px;
`;

const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  flex: 1;
  padding-left: 20px;
`;

const ItemTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
  color: #333;
`;

const ItemDuration = styled.p`
  font-size: 14px;
  color: #999;
`;

const ItemDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 14px;
  margin-bottom: 5px;
  color: #333;
`;

const LanguageList = styled.div`
  display: flex;
  flex-direction: column;
`;

const LanguageItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const LanguageName = styled.p`
  flex: 1;
  font-size: 14px;
`;

const LanguageBar = styled.div`
  width: 100px;
  height: 8px;
  background-color: #ccc;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
`;

const LanguageFill = styled.div`
  height: 100%;
  background-color: #333;
  width: ${(props) => props.level || "0%"};
`;
