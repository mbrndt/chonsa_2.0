import React from "react";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { ADD_JOURNAL } from "../../mutations/journalMutations";
import { GET_JOURNAL } from "../../queries/journalQueries";
import { useMutation } from "@apollo/client";

import "./Journal.css";

function JournalForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [addJournal] = useMutation(ADD_JOURNAL, {
    variables: { title, content },
    update(cache, { data: { addJournal } }) {
      const { journals } = cache.readQuery({ query: GET_JOURNAL });
      cache.writeQuery({
        query: GET_JOURNAL,
        data: { journals: journals.concat([addJournal]) },
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "" || content === "") {
      alert("Please fill in all fields");
    }
    addJournal(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div className="journalForm">
      <h1>Journal Form</h1>
      <form onSubmit={onSubmit}>
        <div className="">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="formControl"
            id="titleTextArea"
            placeholder="new title ..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="content">Content</label>
          <textarea
            className="formControl"
            id="contentTextArea"
            placeholder="please write here ..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
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
