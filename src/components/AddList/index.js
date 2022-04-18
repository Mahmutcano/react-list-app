import React from "react";

function AddList({ tasks, setTasks, typeConvertor }) {
  const AddTask = (e) => {
    e.preventDefault();
    let val = e.target.firstChild.value;
    if (val !== "") {
      localStorage.setItem(val, false);
      setTasks([...tasks, { text: val, done: false }]);
      e.target.firstChild.value = "";
    }
  };
  return (
    <div>
      <form onSubmit={AddTask}>
        <input
          className="addList"
          type="text"
          placeholder="What needs to be done?"
        />
      </form>
    </div>
  );
}

export default AddList;