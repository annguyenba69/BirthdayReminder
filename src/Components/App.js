import { useState } from "react";
import DetailBirthdayReminder from "./DetailBirthdayReminder/DetailBirthdayReminder";
import data from "./Data.json";
function App() {
  const [listPeople, setListPeople] = useState(data);
  function clearAll() {
    setListPeople([]);
  }
  return (
    <div id="wrapper">
      <div id="wp-content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div id="birthday-reminder">
                <h3 className="title display-4">{listPeople.length} birthdays today</h3>
                {listPeople.map((value, key) => (
                  <DetailBirthdayReminder value={value}></DetailBirthdayReminder>
                ))}
                <div className="button-clear-all text-center mt-3">
                  <button onClick={() => clearAll()} className="btn btn-info">Clear All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
