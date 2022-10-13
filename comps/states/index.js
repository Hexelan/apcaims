import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";
import { useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import { states } from "../../constants/states";

export default function StatesComp() {
  const [statesToDisplay, setStatesToDisplay] = useState(states);
  const [deleted, setDeleted] = useState(false);
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
        <div>
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
            <th>State</th>
          </tr>
          {statesToDisplay.map((state, index) => (
            <tr>
              <td>{index + 1}.</td>
              <td>{state.name}</td>

              <td>
                <AiFillDelete onClick={(event) => deleteProduct(product)} />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
