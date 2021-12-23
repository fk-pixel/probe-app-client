import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import moment from "moment";

export default function Dashboard() {

  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState([]);

  useEffect(() => {
    if (inputValue) {

      try {
        setLoading(true);
        axios
          .get(`http://localhost:8080/sum/${inputValue}`)
          .then((res) => {
            console.log(res);
            const data = res.data;
            if (data && data.length) {

              setSelectedValue(data);
            }
            setLoading(false);

            if (data.length === 0) {
              setSelectedValue(0);
            }
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            setSelectedValue([])
            console.log(error, "catch the hoop");
          });
      } catch (error) {
        console.log(error)
        setLoading(false);
        setSelectedValue([])
      }
    }
  }, [inputValue]);

  /* const onSearchChange = (e) => {
    setInputValue(e);
  }; */

  let maxData = null
  let minData = null
  if (selectedValue && selectedValue.length > 0) {
    maxData = moment(selectedValue[0].date).format('ll');
    minData = moment(selectedValue[selectedValue.length - 1].date).format('ll');
  }

  return (
    <Container className="p-4 mt-8">
      {loading && <h4>Loading...</h4>}
      <div className="m-4">
        <h1 style={{ color: "#e63946" }}>Summary Sales</h1>
        <label style={{ marginBottom: "1rem" }}>Select Your seraching date:</label>
        <select
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className="form-select p-2 mb-4"
        >
          <option value="0" style={{ display: "none" }}>Select..</option>
          <option value="lastday">Lastday</option>
          <option value="lastweek">Lastweek</option>
          <option value="lastmonth">Lastmonth</option>
        </select>
        <div className="d-flex mb-4">
          <p>Today is: </p>
          <p className="badge badge-info" style={{ marginLeft: "0.5rem" }}>{moment().format("ll")}</p>

        </div>
        <div className="d-flex mb-4">

          <p>Arrange is: </p>
          <p className="badge badge-info" style={{ marginLeft: "0.5rem" }}>{minData} - {maxData}</p>
        </div>
      </div>
      {inputValue &&
        <div>
          <h4 className="mt-4">Your summary for a last{inputValue}:</h4>
          <Table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Total</th>
              </tr>
            </thead>
            {selectedValue ? (
               selectedValue.map((d, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{moment(d.date).format("ll")}</td>
                    <td>{d.total} €</td>
                  </tr>
                </tbody>
              ))
            )
             :
             null
            }
          </Table>
        </div>
      }


    </Container >

  );
}
