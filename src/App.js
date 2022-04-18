import "./App.css";
import { useState } from "react";
import AddList from "./components/AddList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ShowList from "./components/ShowList";

// const defaultTasks = [
//   {
//     text: "Taste JavaScript",
//     done: true,
//   },
//   {
//     text: "Code furiously",
//     done: true,
//   },
//   {
//     text: "Promote Mavo",
//     done: false,
//   },
//   {
//     text: "Give talks",
//     done: false,
//   },
//   {
//     text: "Write tutorials",
//     done: true,
//   },
//   {
//     text: "Have a life!",
//     done: false,
//   },
// ];

const localList = [];

for (let index = 0; index < localStorage.length; index++) {
  localList.push({
    text: localStorage.key(index),
    done: JSON.parse(localStorage.getItem(localStorage.key(index))),
  });
}

function App() {
  // const typeConvertor = (a, b) => {
  //   return { text: a, done: b };
  // };
  const [tasks, setTasks] = useState(localList);

  const [shower, setShower] = useState("All");
  const filtered = (shower) =>
    shower === "All"
      ? tasks
      : shower === "Active"
      ? tasks.filter((task) => task.done === false)
      : tasks.filter((task) => task.done !== false);

  return (
    <div className="App">
      <div>
        <Header />
        <div className="card">
          <AddList
            tasks={tasks}
            setTasks={setTasks}
            // typeConvertor={typeConvertor}
          />
          <ShowList
            tasks={tasks}
            setTasks={setTasks}
            filtered={filtered}
            shower={shower}
            setShower={setShower}
            // typeConvertor={typeConvertor}
          />
          <Footer
            tasks={tasks}
            setTasks={setTasks}
            filtered={filtered}
            setShower={setShower}
            // typeConvertor={typeConvertor}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
