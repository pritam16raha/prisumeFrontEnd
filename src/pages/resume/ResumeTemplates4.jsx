import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
min-width: 700px;
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
  text-align: center;
  margin-bottom: 20px;
`;

const Name = styled.h1`
  font-size: 36px;
  margin: 0;
  font-weight: 700;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 10px 0 20px;
  font-weight: 400;
  color: #666;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
`;

const Section = styled.section`
  margin: 40px 0;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

const JobTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

const JobInfo = styled.p`
  font-size: 14px;
  color: #999;
  margin: 5px 0 15px;
`;

const JobDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const ContactItem = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0;
`;

const ResumeTemplates4 = forwardRef((props, ref) => {
  return (
    <Container>
      <Header>
        <Name>ESTELLE DARCY</Name>
        <Title>SOCIAL MEDIA MANAGER</Title>
        <Description>
          I am an experienced social media manager seeking a full-time position in the field of social media and marketing communications, where I can apply my knowledge and skills for continuous improvement.
        </Description>
      </Header>

      <Section>
        <SectionTitle>SKILLS</SectionTitle>
        <SkillsList>
          <SkillItem>Photo editing and digital illustration software</SkillItem>
          <SkillItem>Social media suites & management software</SkillItem>
          <SkillItem>Tracking & analytics tools</SkillItem>
          <SkillItem>Word processors</SkillItem>
        </SkillsList>
      </Section>

      <Section>
        <SectionTitle>EDUCATION</SectionTitle>
        <JobTitle>COMMUNICATIONS INTERN</JobTitle>
        <JobInfo>Bachelor of Arts, Major in Communication</JobInfo>
        <JobInfo>University of Dundee | 2019 - 2022</JobInfo>

        <JobTitle>SOCIAL MEDIA PRODUCER</JobTitle>
        <JobInfo>Course in Digital Marketing</JobInfo>
        <JobInfo>University of Mac Lane and Knights | 2022 - 2024</JobInfo>
      </Section>

      <Section>
        <SectionTitle>EXPERIENCE</SectionTitle>
        <JobTitle>SOCIAL MEDIA PRODUCER</JobTitle>
        <JobInfo>Pixelpoint Hive | 2024 - 2026</JobInfo>
        <JobDescription>
          Managed social media accounts. Created social media graphics for daily posting. Increased social media following and clicks by an average of 200% yearly.
        </JobDescription>

        <JobTitle>SOCIAL MEDIA PRODUCER</JobTitle>
        <JobInfo>Pixelpoint Hive | 2024 - 2026</JobInfo>
        <JobDescription>
          Organizes all social media posts for the editorial department. Approves all content to be posted on social media. Engages with readers and clients online.
        </JobDescription>
      </Section>

      <ContactInfo>
        <ContactItem>hello@reallygreatsite.com</ContactItem>
        <ContactItem>www.reallygreatsite.com</ContactItem>
        <ContactItem>@reallygreatsite</ContactItem>
        <ContactItem>123 Anywhere St., Any City</ContactItem>
      </ContactInfo>
    </Container>
  );
}
);

ResumeTemplates4.displayName = "ResumeTemplates4"

export default ResumeTemplates4;
