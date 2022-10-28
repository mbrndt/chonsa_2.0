import React from "react";

export default function Form() {
  return (
    <div>
      <form>
        <input className="rounded-md" type="text" />
        <button className="rounded-md b" type="submit">
          <i className=""></i>
        </button>
        <div>
          <select name="todos" id="todos">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}
