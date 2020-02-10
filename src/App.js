import React from "react";
import "./App.css";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
const query = gql`
  query courseTopics {
    courseTopics {
      name
      id
    }
  }
`;
function App() {
  const { loading, data } = useQuery(query);
  if (loading) return <h2>loading</h2>;
  return (
    <div className="App">
      {data.courseTopics.map(d => {
        return <li>{d.name}</li>;
      })}
    </div>
  );
}

export default App;
