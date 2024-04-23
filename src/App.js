import "./App.css";
import Form from "./Components/Form";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [AllData, setAllData] = useState([
  
  ]);

  function GetDataFromChild(data) {
    document.querySelector("#headTable").classList.remove("hidden");

    data["ID"] = AllData.length + 1;
    data["Delete"] = "Delete";
    AllData.push(data);
    localStorage.removeItem("data");
    localStorage.setItem("data", JSON.stringify(AllData));
    const newData = AllData.map((e, i) => {
      e.ID = i + 1;
      return e;
    });
    setAllData(newData);
    setCount(count + 1);
  }

  useEffect(() => {
    if (localStorage.getItem("data")) {
      const data = JSON.parse(localStorage.getItem("data"));
      const newData = data.map((e, i) => {
        e.ID = i + 1;
        return e;
      });
      setAllData(newData);
      if (data.length !== 0) {
        document.querySelector("#headTable").classList.remove("hidden");
      } else if (data.length == 0) {
        document.querySelector("#headTable").classList.add("hidden");
      }
    }

   
  }, []);

  return (
    <>
      <div className="App">
        <Form GetDataFromChild={GetDataFromChild} />
      </div>
      <section className="relative  container-table">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead
            className="text-xs text-gray-700 uppercase bg-gray-50  hidden"
            id="headTable"
          >
            <tr>
              <th scope="col" className="px-6 py-3 font-title-google  id-col">
                ID
              </th>
              <th scope="col" className="px-6 py-3 font-title-google ">
                First Name
              </th>
              <th scope="col" className="px-6 py-3 font-title-google ">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3 font-title-google ">
                Email
              </th>
              <th scope="col" className="px-6 py-3 font-title-google ">
                Password
              </th>{" "}
              <th scope="col" className="px-6 py-3 font-title-google ">
                Country
              </th>
              <th scope="col" className="px-6 py-3 font-title-google ">
                Gender
              </th>
              <th scope="col" className="px-6 py-3 font-title-google ">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {AllData.map((e, i) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 "
                  key={i}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white id-col font-detail-google text-black"
                  >
                    {e.ID}
                  </th>
                  <td className="px-6 py-4 font-detail-google text-black">
                    {e.First_Name}
                  </td>
                  <td className="px-6 py-4 font-detail-google text-black">
                    {e.Last_Name}
                  </td>
                  <td className="px-6 py-4 font-detail-google text-black">
                    {e.Email}
                  </td>
                  <td className="px-6 py-4 font-detail-google text-black">
                    {e.Password}
                  </td>
                  <td className="px-6 py-4 font-detail-google text-black">
                    {e.Country}
                  </td>
                  <td className="px-6 py-4 font-detail-google text-black">
                    {e.Gender}
                  </td>
                  <td className="px-6 py-4 font-detail-google text-black">
                    <button
                      onClick={(e) => {
                        // e.target.parentElement.parentElement.remove()
                        let idInTable = parseInt(
                          e.target.parentElement.parentElement.firstChild
                            .innerText
                        );

                        const newData = AllData.filter((itemAllData) => {
                          if (idInTable !== itemAllData.ID) {
                            return itemAllData;
                          }
                        });

                        setAllData(newData);
                        localStorage.setItem("data", JSON.stringify(newData));
                        if (AllData.length == 1) {
                          document
                            .querySelector("#headTable")
                            .classList.add("hidden");
                        }
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    >
                      {e.Delete}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default App;
