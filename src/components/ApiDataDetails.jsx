import React, { useContext } from "react";
import { ApiData } from "./FetchApiData";
import Table from "react-bootstrap/Table";

const ApiDataDetails = () => {
  const data = useContext(ApiData);
  console.log(data, "api data ");
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ApiDataDetails;
