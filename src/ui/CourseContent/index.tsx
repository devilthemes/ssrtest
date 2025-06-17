"use client";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function CourseContent() {
  const [activeid, setActiveId] = useState(1);
  const data = [
    {
      id: 1,
      title: "Basics of Data Analysis",
      modules: 3,
      duration: "1hr 30 Min",
      desc: " We start with a consultation, followed by analysis, project planning, and regular updates during development.",
    },
    {
      id: 2,
      title: "The Data Ecosystem",
      modules: 3,
      duration: "30 Min",
      desc: "  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat non proident, sunt in",
    },
    {
      id: 3,
      title: "Mining & Visualizing Data and Communication Results",
      modules: 7,
      duration: "8hr 10 Min",
      desc: "  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat non proident, sunt in",
    },
    {
      id: 4,
      title: "Career Opportunities and Data Analysis in Action",
      modules: 4,
      duration: "6hr 5 Min",
      desc: "  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat non proident, sunt in",
    },
  ];
  const showIT = (id: number) => {
    if (id === activeid) {
      setActiveId(0);
    } else {
      setActiveId(id);
    }
  };
  return (
    <div className="courseList">
         <h3  className="txt-md-700 ">Course Content</h3>
      <div className="accordianData">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className={`${activeid === item.id ? "active" : " "} item`}
            >
              <button onClick={() => showIT(item.id)} className="lab">
                <div className="top">
                  <span>{item.title}</span>
                  <img src="/assets/images/arrow-top.svg" width="15" height="9" />
                </div>

                <div className="course-target txt-xs-400">
                  <span className="module">{item.modules} Modules</span>{" "}
                  <span className="duration">{item.duration} to complete</span>
                </div>
              </button>
              <div className="accordianBody">{item.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
