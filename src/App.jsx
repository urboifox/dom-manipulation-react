import { useState } from "react";

function App() {
  const [places, setPlaces] = useState([
    {
      id: 1,
      place: "right",
      checked: false,
    },
    {
      id: 2,
      place: "right",
      checked: false,
    },
    {
      id: 3,
      place: "right",
      checked: false,
    },
    {
      id: 4,
      place: "left",
      checked: false,
    },
    {
      id: 5,
      place: "left",
      checked: false,
    },
    {
      id: 6,
      place: "left",
      checked: false,
    },
  ]);

  const handleToRight = () => {
    const updatedPlaces = places.map((e) => {
      if (e.checked && e.place === "left") {
        return {
          ...e,
          place: "right",
          checked: false,
        };
      }
      return e;
    });
    setPlaces(updatedPlaces);
  };
  const handleToLeft = () => {
    const updatedPlaces = places.map((e) => {
      if (e.checked && e.place === "right") {
        return {
          ...e,
          place: "left",
          checked: false,
        };
      }
      return e;
    });
    setPlaces(updatedPlaces);
  };
  return (
    <main>
      <div className="flex ">
        <div className="border p-5">
          {places?.map((_, i) => {
            return (
              <div key={i}>
                {places[i]?.place === "left" && (
                  <input
                    onChange={(e) => {
                      places[i].checked = e.target.checked;
                    }}
                    type="checkbox"
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="border p-5">
          {places?.map((_, i) => {
            return (
              <div key={i}>
                {places[i]?.place === "right" && (
                  <input
                    onChange={(e) => {
                      places[i].checked = e.target.checked;
                    }}
                    type="checkbox"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <button onClick={() => handleToLeft()}>Move to left</button>
      <button onClick={() => handleToRight()}>Move to right</button>
    </main>
  );
}

export default App;
