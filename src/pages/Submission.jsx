import React from "react";
import { useSearchParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Submission = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name");

  return (
    <div className="submission">
      <div className="submission_container">
        <h1 className="xl">{`Thank you for your message${
          name ? " " + name : ""
        }! 🥳`}</h1>
        <p className="xs">I will reach out as soon as I can</p>

        <button className="submission_button">
          <a className="xs flex ai-c" href="/">
            <FaArrowLeft className="submission_icon" />
            Go back to home page
          </a>
        </button>
      </div>
    </div>
  );
};

export default Submission;
