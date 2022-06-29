import React from "react";
import { FaPen } from "react-icons/fa";
import "./Journal.css";

function JournalForm() {
  return (
    <div className="journalForm">
      <h1>Journal Form</h1>
      <form>
        <div className="">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="formControl"
            id="titleTextArea"
            placeholder="new title ..."
          />
        </div>
        <div className="">
          <label htmlFor="content">Content</label>
          <textarea
            className="formControl"
            id="contentTextArea"
            placeholder="please write here ..."
          ></textarea>
        </div>
        <button type="submit">
          <div>
            <FaPen className="icon" />
            <span>Submit</span>
          </div>
        </button>
      </form>
    </div>
  );
}

export default JournalForm;
