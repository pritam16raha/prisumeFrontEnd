import React, { useEffect, useState } from "react";
import styled from "styled-components";
import styles from "./Editor.module.css";
import InputControl from "../../components/InputControl";
import { MdCancel } from "react-icons/md";

const Editor = (props) => {
  const sections = props.sections || {};
  const information = props.information || {};
  const firstSectionKey = Object.keys(sections)[0];

  const [activeSectionKey, setActiveSectionKeys] = useState(
    Object.keys(sections)[0]
  );

  const [activeInformation, setActiveInformation] = useState(
    information[sections[firstSectionKey]]
  );

  const [sectionTitle, setSectionTitle] = useState(sections[firstSectionKey]);

  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    email: activeInformation?.detail?.email || "",
    phone: activeInformation?.detail?.phone || "",
  });

  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    if (tempValues.points) {
      tempValues.points[index] = value;
    } else {
      tempValues.points = [];
      tempValues.points[index] = value;
    }
    setValues(tempValues);
  };

  //body of individual columns
  const workExperienceBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter Title eg.Frontend Developer"
          defaultValue={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg.Amazon"
          defaultValue={values.companyName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, companyName: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Provide certificate link"
          value={values.certificationLink}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              certificationLink: event.target.value,
            }))
          }
        />
        <InputControl
          label="Location"
          placeholder="Enter current location city eg. Durgapur"
          defaultValue={values.location}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, location: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start date"
          type="date"
          defaultValue={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End date"
          type="date"
          defaultValue={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
      <div className={styles.column}>
        <label>Enter Work Descriptions</label>
        <InputControl
          placeholder="Line 1"
          defaultValue={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.targe.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          defaultValue={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.targe.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          defaultValue={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.targe.value, 2)}
        />
      </div>
    </div>
  );

  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter Title eg. Chat App"
          defaultValue={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <InputControl
        label="Overview"
        placeholder="Enter basic overview of projects"
        defaultValue={values.overview}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, overview: event.target.value }))
        }
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          placeholder="Enter Deployed Link of the project"
          defaultValue={values.deployedLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, deployedLink: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          placeholder="Enter Github Link of the project"
          defaultValue={values.gitLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, gitLink: event.target.value }))
          }
        />
      </div>
      <div className={styles.column}>
        <label>Enter Project Descriptions</label>
        <InputControl
          placeholder="Line 1"
          defaultValue={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.targe.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          defaultValue={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.targe.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          defaultValue={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.targe.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          defaultValue={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.targe.value, 3)}
        />
      </div>
    </div>
  );

  const eduationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter Title eg. MCA"
          defaultValue={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <InputControl
        label="College/School Name"
        placeholder="Enter your college/school name"
        defaultValue={values.collegeSchool}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, collegeSchool: event.target.value }))
        }
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          defaultValue={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          defaultValue={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          placeholder="Enter Full name eg. Pritam Raha"
          defaultValue={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Title"
          placeholder="Enter your Title eg. Fresher"
          defaultValue={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="LinkedIn Link"
          placeholder="Enter your LinkedIn Profile Link"
          defaultValue={values.linkedin}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          placeholder="Enter your Github Profile Link"
          defaultValue={values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"
          type="email"
          placeholder="Enter your email"
          defaultValue={values.email}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Phone Number"
          type="number"
          placeholder="Enter your Valid Contact number"
          defaultValue={values.phone}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const acheivementBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List Your Achievements</label>
        <InputControl
          placeholder="Line 1"
          defaultValue={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.targe.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          defaultValue={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.targe.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          defaultValue={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.targe.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          defaultValue={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.targe.value, 3)}
        />
      </div>
    </div>
  );

  const summaryBody = (
    <div className={styles.detail}>
      <InputControl
        label="Summary"
        placeholder="Enter your objective/summary"
        defaultValue={values.summary}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, summary: event.target.value }))
        }
      />
    </div>
  );

  const otherBody = (
    <div className={styles.detail}>
      <InputControl
        label="Other"
        placeholder="Enter Something"
        defaultValue={values.other}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, other: event.target.value }))
        }
      />
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExperienceBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return eduationBody;
      case sections.achievement:
        return acheivementBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  };

  const handleSubmission = () => {
    console.log(values)
  }

  useEffect(() => {
    setActiveInformation(information[sections[activeSectionKey]]);
    setSectionTitle(sections[activeSectionKey]);
  }, [activeSectionKey, information, sections]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${styles.section}  ${
              activeSectionKey === key ? styles.active : ""
            }`}
            key={key}
            onClick={() => setActiveSectionKeys(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>

      <div className={styles.body}>
        <InputControl
          label="Title"
          placeholder="Enter Section Title"
          value={sectionTitle}
          onChange={(event) => setSectionTitle(event.target.value)}
        />
        <div className={styles.chips}>
          {activeInformation?.details
            ? activeInformation?.details?.map((item, index) => (
                <div className={styles.chip} key={item.title + index}>
                  <p>
                    {sections[activeSectionKey]} {index + 1}
                  </p>
                  <MdCancel />
                </div>
              ))
            : ""}
        </div>
        {generateBody()}
        <button onClick={handleSubmission}>Save</button>
      </div>
    </div>
  );
};

export default Editor;
