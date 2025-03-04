
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import "../../components/table.css";
import { useNavigate } from "react-router";
import { api } from "../../api";
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJib29rX2lkIjoyOSwibWVtYmVyX2lkIjoxLCJuYW1lIjoicGF3YW5fbWlzaHJhIiwiZW1haWwiOiJwYXdhbjEyMjJAZ21haWwuY29tIiwibW9iaWxlIjoiOTg0Nzc2NjI2MDAiLCJwYXNzd29yZCI6IiQyYiQxMCQzajRJblVOZGV4Q3lLN0pDTDNuNEllbzY5alYvMHV3MWNtNnZMWDM4UUJ6QThkaEVDQ2V1UyIsImNyZWF0ZWRfYXQiOiIyMDI1LTAyLTIwVDA3OjQxOjE0LjIxNloiLCJ1cGRhdGVkX2F0IjoiMjAyNS0wMi0yMFQwNzo0MToxNC4yMTZaIiwiYm9va3MiOnsiaWQiOjI5LCJ0aXRsZSI6ImNvbXB1dGVyIGFyY2hoaXRlY3R1cmUiLCJhdXRob3IiOiJva2F5eXkiLCJwcmljZSI6MCwiYXZhaWxhYmxlIjpmYWxzZSwicHVibGlzaGVyX2lkIjo0LCJjcmVhdGVkX2F0IjoiMjAyNS0wMi0xOVQxODo1Mjo0MS40ODFaIiwidXBkYXRlZF9hdCI6IjIwMjUtMDItMTlUMTg6NTI6NDEuNDgxWiJ9fSwiaWF0IjoxNzQwMDc1MzcyLCJleHAiOjE3NDA2ODAxNzJ9.tm_pspOQE98oVpxjIxnsMhcX16JUCkI2q4dsLUNGaJw";


const User = () => {
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
  const fetchUser = async () => {
    try {
      const response = await api({
        method: 'get',
        url: '/users'
      });
      console.log({ response });
      if (response.status === 200) {
        console.log(response.data);
        setData(response.data);
        setFilteredData(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUser();
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
  console.log(tableData);


  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h1>Users</h1>
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
          onClick={() => navigate("/users/add")}
        >
          + Add New
        </button>
      </div>
      <table>
        <thead>
          <tr>
          <th>Id</th>
            <th>name</th>
            <th>email</th>
            <th>mobile</th>
            <th>book_id</th>
            <th>member_id</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((item: any)=> (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.book_id}</td>
                <td>{item.member_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {tableData.length === 0 && (
        <p style={{ width: "100%", textAlign: "center" }}>
          This users is not available!!
        </p>
      )}
    </div>
  );
};

export default User;