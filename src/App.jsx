import React from "react";
import { Form } from "./components/form";
import { Todo } from "./components/todo/todo";

function App() {
  const [data, setData] = React.useState([]);

  return (
    <>
      <Form setData={setData} />
      {data.map((item) => (
        <Todo key={item.id} setData={setData} {...item} />
      ))}
    </>
  );
}

export default App;
