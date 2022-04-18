import React from "react";

function ShowList({ tasks, setTasks, filtered, shower, typeConvertor }) {
  return (
    <div>
      <ul>
        {filtered(shower).map((task, index) => (
          <li key={index}>
            <div className="showList">
              <input
                className="mx-2"
                type="checkbox"
                checked={task.done}
                onChange={(e) => {
                  localStorage.setItem(task.text, e.target.checked);
                  setTasks(
                    tasks.map((el) =>
                      el.text === task.text
                        ? { ...el, done: e.target.checked }
                        : el
                    )
                  );
                }}
              />
              <input
                type="text"
                value={task.text}
                className={task.done ? "linedtext" : ""}
                onChange={(e) => {
                  localStorage.removeItem(task.text);
                  localStorage.setItem(e.target.value, task.done);

                  setTasks(
                    tasks.map((el) =>
                      el.text === task.text
                        ? { ...el, text: e.target.value }
                        : el
                    )
                  );
                }}
              />
              <button
                className="btn btn-outline-light p-2"
                onClick={(e) => {
                  localStorage.removeItem(task.text);
                  setTasks(tasks.filter((el) => el.text !== task.text));
                }}
              >
                x
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowList;