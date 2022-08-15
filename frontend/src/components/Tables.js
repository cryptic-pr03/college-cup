import Table from "react-bootstrap/Table";

function Tables({ headings, data }) {
  console.log(headings);
  console.log(data);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {headings.map((h) => (
            <th>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((each) => {
          return (
            <tr>
              <td>{each.name}</td>
              <td>{each.code}</td>
              <td>{each.course}</td>
              <td>{each.type}</td>
              <td><a href={each.url}>{ "Open"}</a></td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Tables;
