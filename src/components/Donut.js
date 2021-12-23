import { useState, useEffect } from "react";
import ApexChart from "react-apexcharts";
import axios from 'axios';
import { donutData } from "./mock";
import {
  Container,
} from "react-bootstrap";


export default function Donut() {
  const [inputValue, setInputValue] = useState("");
  const [donutSeries, setDonutSeries] = useState([]);
  const [donutOptions, setDonutOptions] = useState(donutData);
  const [loading, setLoading] = useState(false);


  // Search and get by keyword->inputValue
  useEffect(() => {
    if (inputValue) {
      try {
        setLoading(true);
        axios
          .get(`http://localhost:8080/category/${inputValue}`)
          .then((res) => {
            console.log(res);
            const data = res.data;
            if (data && data.length) {
              const sales = [];
              const labels = [];
              data.forEach(d => {
                sales.push(d.sales);
                labels.push(d.category)
              })
              setDonutSeries(sales)
              setDonutOptions(prev => ({
                ...prev,
                labels: labels
              }))

              setLoading(false);
            } else {
              setLoading(false);
              setDonutSeries([])
              setDonutOptions(prev => ({
                ...prev,
                labels: []
              }))
            }
          })
          .catch((error) => {
            setLoading(false);
            console.log(error, "catch the hoop");
          });
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    }
  }, [inputValue]);



  return (

    <Container className="p-4 mt-8">

      {loading && <h4>Loading...</h4>}
      <div className="m-4">
        <h1 style={{ color: "#e63946" }}>Sales By Category</h1>
        <label style={{ marginBottom: "1rem" }}>Please choose a period:</label>
        <select
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className="form-select p-2"
        >
          <option value="0" style={{ display: "none" }}>Select..</option>
          <option value="lastday">Lastday</option>
          <option value="lastweek">Lastweek</option>
          <option value="lastmonth">Lastmonth</option>
        </select>
      </div>

      <ApexChart
        className="m-4"
        type={"donut"}
        height={300}
        series={donutSeries}
        options={donutOptions}
      />

    </Container>
  );
}