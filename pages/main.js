import { useState } from "react";
import Papa from "papaparse";
import axios from "axios";
import Table from "@/components/Table";
import Layout from "@/components/Layout";
import SendMatches from "@/sections/SendMatches";
import LoadFile from "@/components/LoadFile";
// Used this medium post as a reference: https://medium.com/how-to-react/how-to-parse-or-read-csv-files-in-reactjs-81e8ee4870b0
const Index = () => {
  // State to store parsed data
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableHeads, setTableHeads] = useState([]);

  //State to store the values
  const [tableValues, setTableValues] = useState([]);

  const handleUpload = async (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const headsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          headsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableHeads(headsArray[0]);

        // Filtered Values
        setTableValues(valuesArray);
      },
    });

    const file = event.target.files[0];

    // Create a FormData object and append the file
    const formData = new FormData();
    formData.append("csvFile", file);
    try {
      // Make a POST request to the API route
      const response = await axios.post("/api/process-csv", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle the response from the API
      console.log(response.data);

      // Process the response data as needed
      const { parsedData, tableRows, values } = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      {/* File Uploader
      <input
        type="file"
        name="file"
        onChange={handleUpload}
        accept=".csv"
        style={{ display: "block", margin: "10px auto", color: "white" }}
        className="bg-dark-500 rounded"
      />
      <br />
      <br />
      <Table tableHeads={tableHeads} tableValues={tableValues} /> */}

      <LoadFile />

      {/* <Filter /> */}

      {/* <Send /> */}
      <SendMatches />

    </Layout>
  );
};

export default Index;
