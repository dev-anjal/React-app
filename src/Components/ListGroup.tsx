// import { Fragment } from "react";

import { useState } from "react";

function ListGroup() {
  let items = ["Itahari", "Biratnagar", "Pakistan", "Dharan", "India"];
  //   items = [];
  // ! to make code look more preetier we use functions to check the condition before hand
  //   const CheckArray = () => {
  //     return items.length === 0 ? <p>nothing here bruh</p> : null;
  //   };

  // ! First React Hook
  const [selectedIndex, setSelectedIndex] = useState(0);

  //   const clickEvent = () => {
  //     console.log();
  //   };

  //   const updateDOM = (index) => {
  //     setSelectedIndex(index);
  //   };
  // TODO = keep in mind that making changes in the second parameter of usestate hook, updates the DOM
  //   setTimeout(() => {
  //     setSelectedIndex(3);
  //   }, 1900);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>List Group</h1>
      <ul className="list-group">
        {/* second part of the code */}
        {/* {CheckArray()} */}
        {items.length === 0 && <p>Nothing here</p>}
        {items.map((item, id) => (
          <li
            className={
              selectedIndex === id
                ? "list-group-item active"
                : "list-group-item"
            }
            key={id}
            onClick={() => {
              setSelectedIndex(id);
              console.log(selectedIndex);
            }}
          >
            {item}
          </li>
        ))}
        ;
      </ul>
    </>
  );
}

export default ListGroup;
