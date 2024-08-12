import React from 'react';
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
`;

const Education = styled.section`
  margin-bottom: 20px;
`;

const AdditionalInfo = styled.section`
  margin-bottom: 20px;
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

const ResumeTemplate5 = () => {
  return (
    <Container>
      <Header>
        <Name>JACQUELINE THOMPSON</Name>
        <ContactInfo>123 Anywhere St., Any City • 123-456-7890 • hello@reallygreatsite.com</ContactInfo>
        <ContactInfo>www.reallygreatsite.com</ContactInfo>
      </Header>

      <Summary>
        <SectionTitle>SUMMARY</SectionTitle>
        <p>
          Results-oriented Engineering Executive with a proven track record of optimizing project outcomes. Skilled in strategic project management and team leadership. Seeking a challenging executive role to leverage technical expertise and drive engineering excellence.
        </p>
      </Summary>

      <WorkExperience>
        <SectionTitle>WORK EXPERIENCE</SectionTitle>

        <div>
          <JobTitle>Engineering Executive, Borcelle Technologies</JobTitle>
          <JobDuration>Jan 2023 - Present</JobDuration>
          <JobDescription>
            <ListItem>Implemented cost-effective solutions, resulting in a 20% reduction in project expenses.</ListItem>
            <ListItem>Streamlined project workflows, enhancing overall efficiency by 25%.</ListItem>
            <ListItem>Led a team in successfully delivering a complex engineering project on time and within allocated budget.</ListItem>
          </JobDescription>
        </div>

        <div>
          <JobTitle>Project Engineer, Salford & Co</JobTitle>
          <JobDuration>Mar 2021 - Dec 2022</JobDuration>
          <JobDescription>
            <ListItem>Managed project timelines, reducing delivery times by 30%.</ListItem>
            <ListItem>Spearheaded the adoption of cutting-edge engineering software, improving project accuracy by 15%.</ListItem>
            <ListItem>Collaborated with cross-functional teams, enhancing project success rates by 10%.</ListItem>
          </JobDescription>
        </div>

        <div>
          <JobTitle>Graduate Engineer, Arowwai Industries</JobTitle>
          <JobDuration>Feb 2020 - Jan 2021</JobDuration>
          <JobDescription>
            <ListItem>Coordinated project tasks, ensuring adherence to engineering standards and regulations.</ListItem>
            <ListItem>Conducted comprehensive project analyses, identifying and rectifying discrepancies in engineering designs.</ListItem>
          </JobDescription>
        </div>
      </WorkExperience>

      <Education>
        <SectionTitle>EDUCATION</SectionTitle>

        <div>
          <JobTitle>Master of Science in Mechanical Engineering</JobTitle>
          <JobDuration>Sep 2019 - Oct 2020</JobDuration>
          <p>University of Engineering and Technology</p>
          <p>Specialization in Advanced Manufacturing.</p>
          <p>Thesis on "Innovations in Sustainable Engineering Practices".</p>
        </div>

        <div>
          <JobTitle>Bachelor of Science in Civil Engineering</JobTitle>
          <JobDuration>Aug 2015 - Aug 2019</JobDuration>
          <p>City College of Engineering</p>
          <p>Relevant coursework in Structural Design and Project Management.</p>
        </div>
      </Education>

      <AdditionalInfo>
        <SectionTitle>ADDITIONAL INFORMATION</SectionTitle>

        <div>
          <p><strong>Technical Skills:</strong> Project Management, Structural Analysis, Robotics and Automation, CAD</p>
          <p><strong>Languages:</strong> English, Malay, German</p>
          <p><strong>Certifications:</strong> Professional Engineer (PE) License, Project Management Professional (PMP)</p>
          <p><strong>Awards/Activities:</strong> Received the "Engineering Excellence" Award for outstanding contributions to project innovation, Borcelle Technologies</p>
        </div>
      </AdditionalInfo>
    </Container>
  );
};

export default ResumeTemplate5;
