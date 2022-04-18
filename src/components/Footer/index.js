import React from "react";

function Footer({ setShower, tasks, typeConvertor }) {
  return (
    <div className="border-top text-secondary">
      <div className="d-flex justify-content-center mt-2">
        <div>
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              setShower("All");
            }}
          >
            All
          </button>
          <p className="text-primary">All: {tasks.length}</p>
        </div>
        <div>
          <button
            className="btn btn-outline-warning"
            onClick={() => {
              setShower("Active");
            }}
          >
            Active
          </button>
          <p className="text-warning">
            Active: {tasks.filter((task) => task.done === false).length}
          </p>
        </div>
        <div>
          <button
            className="btn btn-outline-success"
            onClick={() => {
              setShower("Completed");
            }}
          >
            Completed
          </button>
          <p className="text-success">
            Completed: {tasks.filter((task) => task.done === true).length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;