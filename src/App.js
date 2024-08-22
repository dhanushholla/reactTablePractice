import logo from "./logo.svg";
import "./App.css";
import TableComp from "./Components/TableComp";
import Form from "./Components/Form";

import { useState, useEffect } from "react";
import ImageCarousel from "./Components/ImageCarousel";

function App() {
  const [apiDetails, setApiDetails] = useState({
    loading: false,
    data: [],
    error: "",
  });
  const [tableContent, setTableContent] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [displayHeader, setDisplayHeader] = useState([]);
  const [sortmessage, setSortMessage] = useState(
    `Sorted by ID in order type asc`
  );
  useEffect(() => {
    const fetchData = async () => {
      setApiDetails({ loading: true, data: [], error: "" });

      try {
        const res = await fetch(
          "https://mocki.io/v1/82a244de-99e9-452d-a684-67ac9e5d8972"
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const apidata = await res.json();
        setApiDetails({ loading: false, data: apidata, error: "" });
        setTableContent(apidata);
        setHeaders(Object.keys(apidata[0]));
        setDisplayHeader(
          Object.keys(apidata[0]).map((header) =>
            header.replace("_", "").toLocaleUpperCase()
          )
        );
      } catch (err) {
        setApiDetails({
          loading: false,
          data: [],
          error: err.message || "Something went wrong",
        });
      } finally {
        console.log("Fetch attempt finished.");
      }
    };

    fetchData();
  }, []);

  const handleData = (fname, lname, email, gender, number) => {
    const newObj = {
      id: Math.floor(tableContent.length ? tableContent.length + 1 : 1),
      first_name: fname,
      last_name: lname,
      email,
      gender,
      mobile: number,
    };
    setTableContent((prev) => [...prev, newObj]);
  };

  const deleteRow = (deleteKey) => {
    if (deleteKey === "All") {
      setTableContent([]);
      return;
    }
    let newContent = [...tableContent];
    newContent = newContent.filter((el, rowIndex) => deleteKey != rowIndex);
    console.log(newContent);
    setTableContent(newContent);
  };

  const sortHandle = (key, type) => {
    console.log("in sortHandle");
    const fieldMap = {
      0: "id",
      1: "first_name",
      2: "last_name",
      3: "email",
      4: "gender",
      5: "mobile",
    };
    let newContent = [...tableContent];
    if (type == "asc") {
      if ([1, 2, 3, 4].includes(key)) {
        newContent = newContent.sort((a, b) =>
          a[fieldMap[key]]
            .toLowerCase()
            .localeCompare(b[fieldMap[key]].toLowerCase())
        );
      } else {
        newContent = newContent.sort(
          (a, b) => a[fieldMap[key]] - b[fieldMap[key]]
        );
      }
    } else {
      if ([1, 2, 3, 4].includes(key)) {
        newContent = newContent.sort((a, b) =>
          b[fieldMap[key]]
            .toLowerCase()
            .localeCompare(a[fieldMap[key]].toLowerCase())
        );
      } else {
        newContent = newContent.sort(
          (a, b) => b[fieldMap[key]] - a[fieldMap[key]]
        );
      }
    }
    setSortMessage(`Sorted by ${displayHeader[key]} in order type ${type}`);
    setTableContent(newContent);
  };
  return (
    <div className="App">
      {apiDetails.error ? (
        <div>Something went wrong!!! {apiDetails.error}</div>
      ) : apiDetails.data.length ? (
        <>
          <TableComp
            headers={headers}
            tableContent={tableContent}
            deleteRow={deleteRow}
            sortHandle={sortHandle}
            sortmessage={sortmessage}
          />
          <Form handleAdd={handleData} />
        </>
      ) : (
        <div>Loading......</div>
      )}
      {/* <ImageCarousel /> */}
    </div>
  );
}

export default App;
