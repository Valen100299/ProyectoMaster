import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from 'react-bootstrap';

// Función para realizar una solicitud HTTP GET
async function httpGetAsync(theUrl) {
  try {
    const response = await fetch(theUrl);
    if (response.ok) {
      const data = await response.json();
      return JSON.stringify(data);
    } else {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    return "Error occurred while fetching data.";
  }
}

function Data() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [date, setDate] = useState(null);
  const [startHour, setStartHour] = useState(null);
  const [endHour, setEndHour] = useState(null);
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = async (url) => {
    try {
      const response = await httpGetAsync(url);
      const result = JSON.parse(response);

      setData((prevData) => [...prevData, result]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDateRangeQuery = () => {
    const startISODate = startDate.toISOString();
    const endISODate = endDate.toISOString();

    fetchData(`https://abctyjalr9.execute-api.us-east-1.amazonaws.com/beta/data?func=between_dates&start_date=${startISODate}&end_date=${endISODate}`);
  };

  const handleHourRangeQuery = () => {
    const formattedDate = date.toISOString().split('T')[0];
    const formattedStartHour = startHour.toISOString().split('T')[1];
    const formattedEndHour = endHour.toISOString().split('T')[1];

    fetchData(`https://abctyjalr9.execute-api.us-east-1.amazonaws.com/beta/data?func=between_hours&date=${formattedDate}&start_hour=${formattedStartHour}&end_hour=${formattedEndHour}`);
  };

  useEffect(() => {
    if (isFetching) {
      const interval = setInterval(() => {
        fetchData("https://abctyjalr9.execute-api.us-east-1.amazonaws.com/beta/data");
      }, 10000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isFetching]);

  return (
    <div>
      <h2>Consult between dates</h2>
      <h4>Start date:</h4>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <h4>End date:</h4>
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} /><br/><br/>
      <Button variant="primary" onClick={handleDateRangeQuery}>Start</Button><br/>
      
      <br/><h2>Consult between hours</h2>
      <h4>Date:</h4>
      <DatePicker selected={date} onChange={(date) => setDate(date)} />
      <h4>Start Time:</h4>
      <DatePicker
        selected={startHour}
        onChange={(date) => setStartHour(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
      <h4>End Time:</h4>
      <DatePicker
        selected={endHour}
        onChange={(date) => setEndHour(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      /><br/><br/>
      <Button variant="primary" onClick={handleHourRangeQuery}>Start</Button>

      {/* Render the data obtained from your queries */}
      <div>
        <h2>Data Results</h2>
        {data.map((result, index) => (
          <div key={index}>
            {/* Render the data as needed */}
            <p>{JSON.stringify(result)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Data;
