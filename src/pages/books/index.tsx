
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import "../../components/table.css";
import { useNavigate } from "react-router";

const Books = () => {
  const [searchNumber, setSearchNumber] = useState("");
  const [data, setData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);

  //const headerKeys = Object.keys(Data[0]);
  const navigate = useNavigate()

  const filterById = (id: number) => {
    // filter Data by name
    const filteredData = data?.filter(({item}:any) => item.id == id);
    setFilteredData(filteredData);
    return filteredData;
  };
  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:3000/books", {
        // headers: {
        //   Authorization: 'Bearer ${AUTH_TOKEN}',
        // },
      });
      console.log({ response });
      if (response.status === 200) {
        const data = await response.json();
        console.log({ data });
        setData(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  // filter data by name on search text change
  useEffect(() => {
    if (searchNumber !== "") {
      filterById(parseInt(searchNumber));
    } else {
      setFilteredData(data);
    }
  }, [searchNumber]);

  // filterByName("marker");
  const tableData = searchNumber ? filteredData : data;


  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h1 style={{ color: "green"}}>Books</h1>
      <div className="search-container">
        <Search width={16} height={16} className="icon search" />
        <input
          placeholder="type name..."
          onChange={(e) => {
            setSearchNumber(e.target.value);
          }}
        />
        <button
          style={{ marginLeft: 16, padding: "4px 16px", width: "30%"}}
          onClick={() => navigate("/books/add")}
        >
          + Add New
        </button>
      </div>
      <table>
        <thead>
          <tr>
          <th>Id</th>
          <th>title</th>
          <th>author</th>
          <th>price</th>
          <th>available</th>
          <th>publisher_id</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((item : any) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.price}</td>
              <td>{item.available}</td>
              <td>{item.publisher_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {tableData.length === 0 && (
        <p style={{ width: "100%", textAlign: "center" }}>
          This books is not available!!
        </p>
      )}
    </div>
  );
};

export default Books;