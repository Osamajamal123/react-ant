import "./style.css";
import JsonRecordDivide from "../../jsonrecord.json";
import { useEffect, useState } from "react";
import { RestructorArray } from "../../utels/index.js";

const Jsondivide = () => {
  const [data, setData] = useState([]);
  const [arrartwo, setArrayTwo] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setData(RestructorArray(JsonRecordDivide, 10));
    console.log(RestructorArray(JsonRecordDivide, 10));
    //  console.log("serdata",setData)
  }, []);
  const previuosHAndler = (index) => {
    if (index ===1 || index >1) {
      setIndex(index - 1);
      console.log("previuos",index)
    }
  };
  const nextHAndler = (index) => {
    let total = data?.length -1;
    if (index !== total) {
      setIndex(index + 1);
    }
  };
  console.log("next", index);
  console.log("data?.length", data?.length);
  return (
    <div>
      <div className="arraydata">
        <table>
          <tr>
            <th>id</th>
            <th>age </th>
            <th>name</th>
            <th>gender</th>
            <th>company</th>
            <th>email</th>
          </tr>
          {data[index]?.map((single, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <th>{single.age} </th>
              <th>{single.name}</th>
              <th>{single.gender}</th>
              <th>{single.company}</th>
              <th>{single.email}</th>
            </tr>
          ))}
        </table>
      </div>
      <div className="pagination">
        <div className="paginationflex">
          {index>0 ? 
  <button onClick={() => previuosHAndler(index)}>prevouis</button> : ""
          }
        
          {
            (data?.length !== 0,
            data?.map((single, index) => (
              <button
                onClick={() => {
                  setIndex(index);
                }}
              >
                {index + 1}
              </button>
            )))
          }
          {index < data?.length -1 ? 
 <button onClick={() => nextHAndler(index)}>next</button> : ""
          }
         
        </div>
      </div>
    </div>
  );
};
export default Jsondivide;
