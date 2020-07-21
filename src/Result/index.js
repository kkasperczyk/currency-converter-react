import React from "react";
import "./style.css";

const Result = ({ result }) => (
  <p>
    <label>
      <span className="form__labelText">Result:</span>
      <input
        className="form__field form__field--bigger"
        type="number"
        readOnly
        value={result}
      />
    </label>
  </p>
);

export default Result;
