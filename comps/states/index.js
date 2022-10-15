import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { states } from "../../constants/states";

export default function StatesComp() {
  const [statesToDisplay, setStatesToDisplay] = useState(states);
  const router = useRouter();

  const onSearch = (e) => {
    const searchTerm = e.target.value;
    const tempList = [];
    tempList = states.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setStatesToDisplay(tempList);
  };

  return (
    <div className="section">
      <div className="tableSection">
        <div className="input">
          <input
            type="search"
            placeholder="Search for a state..."
            onChange={onSearch}
          />
        </div>
        <table>
          <tr>
            <th>No</th>
            <th>LGA</th>
            <th>No. LGA</th>
          </tr>
          {statesToDisplay.map((state, index) => (
            <tr>
              <td>{index + 1}.</td>
              <td>{state.name}</td>
              <td>
                <a href={`states/${state.statecode}`}> 12 </a>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
