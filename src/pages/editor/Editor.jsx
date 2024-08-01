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

  //hook to change the chips in work experiences
  const [activeDetailIndex, setActiveDetailIndex] = useState(0);

  const [sectionTitle, setSectionTitle] = useState(sections[firstSectionKey]);

  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || "",
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
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg.Amazon"
          value={values.companyName}
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
          value={values.location}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, location: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start date"
          type="date"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End date"
          type="date"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
      <div className={styles.column}>
        <label>Enter Work Descriptions</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
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
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <InputControl
        label="Overview"
        placeholder="Enter basic overview of projects"
        value={values.overview}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, overview: event.target.value }))
        }
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          placeholder="Enter Deployed Link of the project"
          value={values.deployedLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, deployedLink: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          placeholder="Enter Github Link of the project"
          value={values.gitLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, gitLink: event.target.value }))
          }
        />
      </div>
      <div className={styles.column}>
        <label>Enter Project Descriptions</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
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
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <InputControl
        label="College/School Name"
        placeholder="Enter your college/school name"
        value={values.college}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, college: event.target.value }))
        }
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          value={values.endDate}
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
          value={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Title"
          placeholder="Enter your Title eg. Fresher"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="LinkedIn Link"
          placeholder="Enter your LinkedIn Profile Link"
          value={values.linkedin}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          placeholder="Enter your Github Profile Link"
          value={values.github}
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
          value={values.email}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Phone Number"
          type="number"
          placeholder="Enter your Valid Contact number"
          value={values.phone}
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
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );

  const summaryBody = (
    <div className={styles.detail}>
      <InputControl
        label="Summary"
        placeholder="Enter your objective/summary"
        value={values.summary}
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
        value={values.other}
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
    switch (sections[activeSectionKey]) {
      case sections.basicInfo: {
        const tempDetail = {
          name: values.name,
          title: values.title,
          linkedin: values.linkedin,
          github: values.github,
          email: values.email,
          phone: values.phone,
        };
        props.setInformation((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }

      case sections.workExp: {
        const tempDetail = {
          certificationLink: values.certificationLink,
          title: values.title,
          startDate: values.startDate,
          endDate: values.endDate,
          companyName: values.companyName,
          location: values.location,
          points: values.points,
        };

        // const tempDetails = [ ...information[sections.workExp]?.details ];
        const tempDetails = information[sections.workExp]?.details
          ? [...information[sections.workExp].details]
          : [];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.workExp]: {
            ...prev[sections.workExp],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }

      case sections.project: {
        const tempDetail = {
          link: values.link,
          title: values.title,
          overview: values.overview,
          github: values.github,
          points: values.points,
        };

        const tempDetails = information[sections.project]?.details
          ? [...information[sections.project].details]
          : [];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.project]: {
            ...prev[sections.project],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }

      case sections.education: {
        const tempDetail = {
          title: values.title,
          college: values.college,
          startDate: values.startDate,
          endDate: values.endDate,
        };

        //const tempDetails = [...information[sections.education]?.details];
        const tempDetails = information[sections.workExp]?.education
          ? [...information[sections.education].details]
          : [];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.education]: {
            ...prev[sections.education],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }

      case sections.achievement: {
        const tempPoints = values.points;

        props.setInformation((prev) => ({
          ...prev,
          [sections.achievement]: {
            ...prev[sections.achievement],
            points: tempPoints,
            sectionTitle,
          },
        }));
        break;
      }

      case sections.summary: {
        const tempDetail = values.summary;

        props.setInformation((prev) => ({
          ...prev,
          [sections.summary]: {
            ...prev[sections.summary],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }

      case sections.other: {
        const tempDetail = values.other;

        props.setInformation((prev) => ({
          ...prev,
          [sections.other]: {
            ...prev[sections.other],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
    }
  };

  const handleAddNew = () => {
    const details = activeInformation?.details;
    if (!details) return;
    const lastDetails = details.slice(-1)[0];
    if (!Object.keys(lastDetails).length) return; //object of key returns an array, so check must on length
    details?.push({});

    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));
    setActiveDetailIndex(details?.length - 1);
  };

  const handleDeleteNew = (index) => {
    const details = activeInformation?.details
      ? [...activeInformation?.details]
      : "";
    if (!details) return;
    details.splice(index, 1);

    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));
    setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
  };

  useEffect(() => {
    const activeInfo = information[sections[activeSectionKey]];
    setActiveInformation(activeInfo);
    setSectionTitle(sections[activeSectionKey]);
    setActiveDetailIndex(0);

    if (!activeInfo) {
      setValues({
        name: "",
        overview: "",
        link: "",
        certificationLink: "",
        startDate: "",
        endDate: "",
        points: [],
        title: "",
        linkedin: "",
        github: "",
        email: "",
        phone: "",
      });
      setActiveInformation(null);
      setSectionTitle("");
      return;
    }

    const detailsExist = activeInfo?.details?.length > 0;
    const pointsExist = detailsExist
      ? activeInfo.details[0]?.points
      : activeInfo?.points?.length > 0;

    setValues({
      name: activeInfo?.detail?.name || "",
      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",
      link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
      certificationLink: activeInfo?.details
        ? activeInfo.details[0]?.certificationLink || ""
        : "",
      companyName: activeInfo?.details
        ? activeInfo.details[0]?.companyName || ""
        : "",
      location: activeInfo?.details
        ? activeInfo.details[0]?.location || ""
        : "",
      startDate: activeInfo?.details?.[0]?.startDate || "",
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",

      points: pointsExist
        ? detailsExist
          ? [...activeInfo.details[0].points]
          : [...activeInfo.points]
        : "",

      title: activeInfo?.details
        ? activeInfo.details[0]?.title || ""
        : activeInfo?.detail?.title || "",
      linkedin: activeInfo?.detail?.linkedin || "",
      github: activeInfo?.details
        ? activeInfo.details[0]?.github || ""
        : activeInfo.detail?.github || "",
      email: activeInfo?.detail?.email || "",
      phone: activeInfo?.detail?.phone || "",
      summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
      other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
    });
  }, [activeSectionKey]);

  useEffect(() => {
    setActiveInformation(information[sections[activeSectionKey]]);
  }, [information]);

  useEffect(()=>{
    const details = activeInformation?.details;
    if(!details) return

    const activeInfo = information[sections[activeSectionKey]];
    
    setValues({
      overview: activeInfo.details[activeDetailIndex]?.overview || "",
      link: activeInfo.details[activeDetailIndex]?.link || "",
      certificationLink:
        activeInfo.details[activeDetailIndex]?.certificationLink || "",
      companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
      location: activeInfo.details[activeDetailIndex]?.location || "",
      startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
      endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
      points: activeInfo.details[activeDetailIndex]?.points || "",
      title: activeInfo.details[activeDetailIndex]?.title || "",
      linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
      github: activeInfo.details[activeDetailIndex]?.github || "",
      college: activeInfo.details[activeDetailIndex]?.college || "",
    })

  },[activeDetailIndex])

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
                <div
                  className={`${styles.chip} ${
                    activeDetailIndex === index ? styles.active : ""
                  }`}
                  key={item.title + index}
                  onClick={() => setActiveDetailIndex(index)}
                >
                  <p>
                    {sections[activeSectionKey]} {index + 1}
                  </p>
                  <MdCancel
                    onClick={(event) => {
                      event.stopPropagation();
                      handleDeleteNew(index);
                    }}
                  />
                </div>
              ))
            : ""}

          {activeInformation?.details &&
          activeInformation?.details?.length > 0 ? (
            <div className={styles.new} onClick={handleAddNew}>
              +New
            </div>
          ) : (
            ""
          )}
        </div>
        {generateBody()}
        <button onClick={handleSubmission}>Save</button>
      </div>
    </div>
  );
};

export default Editor;
