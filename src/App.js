import "./App.css";
import SomeText from "./components/SomeText";
import { fetchSearch } from "./features/ComponentName/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useDebounce } from "./hooks/debounce";

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.api.items);
  const status = useSelector((state) => state.api.status);
  const error = useSelector((state) => state.api.error);
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search);

  useEffect(() => {
    if (debounced.length > 3) {
      dispatch(fetchSearch(debounced));
      console.log(status);
    }
  }, [dispatch, debounced]);

  return (
    <div className="App">
      <div className="contanerSearch">
        <div className="myinput">
          <input
            autoFocus
            type="text"
            placeholder=" "
            onChange={(e) => setSearch(e.target.value)}
          />
          <label className="mylable">
            <strong>Search jokers...</strong>
          </label>
          {status === "succeeded" && (
            <div className="foundJokes">Found jokes:{items.total}</div>
          )}
        </div>
      </div>

      <SomeText items={items.result} />
    </div>
  );
}

export default App;
