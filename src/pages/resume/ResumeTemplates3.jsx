import React, { forwardRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';



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
    <Container>
      <Header>
        <NameSection>
          <Name>MORGAN MAXWELL</Name>
          <Title>MARKETING MANAGER</Title>
        </NameSection>
        <ContactInfo>
          <ContactItem>
            <Icon>📞</Icon>+123-456-7890
          </ContactItem>
          <ContactItem>
            <Icon>📧</Icon>hello@reallygreatsite.com
          </ContactItem>
          <ContactItem>
            <Icon>📍</Icon>123 Anywhere St., Any City
          </ContactItem>
        </ContactInfo>
      </Header>

      <Section>
        <SectionTitle>About Me</SectionTitle>
        <p>
          Lorem ipsum dolor sit amet, bonorum pertinax patrioque et pri, ea pri audire molestiae ponderum, ei eripuit habemus delicatissimi eum.
        </p>
      </Section>

      <Section>
        <SectionTitle>Experience</SectionTitle>
        <SectionContent>
          <LeftColumn>
            <ItemTitle>Company Name</ItemTitle>
            <ItemDuration>2017 - 2020</ItemDuration>
            <ItemDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </ItemDescription>

            <ItemTitle>Company Name</ItemTitle>
            <ItemDuration>2020 - 2021</ItemDuration>
            <ItemDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </ItemDescription>
          </LeftColumn>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Education</SectionTitle>
        <SectionContent>
          <LeftColumn>
            <ItemTitle>University Name</ItemTitle>
            <ItemDuration>2015</ItemDuration>
            <ItemDescription>Your Degree</ItemDescription>

            <ItemTitle>University Name</ItemTitle>
            <ItemDuration>2015</ItemDuration>
            <ItemDescription>Your Degree</ItemDescription>

            <ItemTitle>University Name</ItemTitle>
            <ItemDuration>2015</ItemDuration>
            <ItemDescription>Your Degree</ItemDescription>
          </LeftColumn>
        </SectionContent>
      </Section>

      <Section>
        <SectionContent>
          <LeftColumn>
            <SectionTitle>Language</SectionTitle>
            <LanguageList>
              <LanguageItem>
                <LanguageName>Spanish</LanguageName>
                <LanguageBar>
                  <LanguageFill level="90%" />
                </LanguageBar>
              </LanguageItem>
              <LanguageItem>
                <LanguageName>English</LanguageName>
                <LanguageBar>
                  <LanguageFill level="80%" />
                </LanguageBar>
              </LanguageItem>
              <LanguageItem>
                <LanguageName>Japanese</LanguageName>
                <LanguageBar>
                  <LanguageFill level="70%" />
                </LanguageBar>
              </LanguageItem>
              <LanguageItem>
                <LanguageName>Korean</LanguageName>
                <LanguageBar>
                  <LanguageFill level="60%" />
                </LanguageBar>
              </LanguageItem>
            </LanguageList>
          </LeftColumn>

          <RightColumn>
            <SectionTitle>Expertise</SectionTitle>
            <List>
              <ListItem>UI/UX</ListItem>
              <ListItem>Visual Design</ListItem>
              <ListItem>Leadership</ListItem>
              <ListItem>Coaching</ListItem>
            </List>

            <SectionTitle>Reference</SectionTitle>
            <p>
              Lorna Alvarado<br />
              Company Name/Position<br />
              Phone: +123-456-7890
            </p>
          </RightColumn>
        </SectionContent>
      </Section>
    </Container>
  );
}
);

ResumeTemplates3.displayName = "ResumeTemplates3";

export default ResumeTemplates3;

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
  width: ${props => props.level || '0%'};
`;