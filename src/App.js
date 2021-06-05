import "./styles.css";
import { useState } from "react";

const foodDB = {
  chineaseFood: [
    { name: "Momos", rating: "4.5/5" },
    { name: "Chowmein", rating: "4.6/5" }
  ],
  northIndian: [
    { name: "Chhole bhature", rating: "5/5" },
    { name: "Samosa", rating: "4.8/5" }
  ],
  southIndian: [
    { name: "Uttapam", rating: "4.5/5" },
    { name: "Puttu", rating: "4.7/5" }
  ]
};

export default function App() {
  const [selectedFood, setFood] = useState("southIndian");

  function foodClickHandler(foodname) {
    setFood(foodname);
  }

  return (
    <div className="App">
      <h1>🍕goodFood</h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite food. Select a type of food to get started
      </p>

      <div>
        {Object.keys(foodDB).map((foodname) => (
          <button key={foodname} onClick={() => foodClickHandler(foodname)}>
            {foodname}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedFood].map((item) => (
            <li
              key={item.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {item.name} </div>
              <div style={{ fontSize: "smaller" }}> {item.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
