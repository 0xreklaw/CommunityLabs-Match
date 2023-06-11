import { useState } from "react";
import Papa from "papaparse";
import axios from "axios";
import Table from "@/components/Table";
import Layout from "@/components/Layout";
import SendMatches from "@/sections/SendMatches";

const LoadFile = () => {
  // State to store parsed data
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableHeads, setTableHeads] = useState([]);

  //State to store the values
  const [tableValues, setTableValues] = useState([]);

  const handleUpload = async (event) => {
    console.log(event);
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
    <div>
      {/* File Uploader */}
      <div class="max-w-xl">
        <label className="flex justify-center w-full h-64 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
          <span className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className="font-medium text-gray-600">
              Drop files to Attach, or{" "}
              <span className="text-blue-600 underline">browse</span>
            </span>
          </span>
          <input
            type="file"
            name="file"
            onChange={handleUpload}
            accept=".csv"
            className="hidden"
          />
        </label>
      </div>
      {/* <input
        type="file"
        name="file"
        onChange={handleUpload}
        accept=".csv"
        style={{ display: "block", margin: "10px auto", color: "white" }}
        className="bg-dark-500 rounded"
      />
      <br />
      <br /> */}
      <div className="max-w-full overflow-hidden">
        <Table tableHeads={tableHeads} tableValues={tableValues} />
      </div>

    </div>
  );
};

export default LoadFile;
