// This component is used for creating select elelemnt
import React, { useState } from "react";
import { useField } from "@formiz/core";
import Form from "react-bootstrap/Form";
export const MySelect = (props) => {
  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    resetKey,
    setValue,
    value,
  } = useField(props);
  const {
    label,
    options,
    required,
    placeholder,
    
  } = props;
  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  return (
    <div className={`demo-form-group ${showError ? "is-error" : ""}`}>
      <Form.Group>
        <Form.Label className="demo-label" htmlFor={id}>
          {label}
          {!!required && " *"}
        </Form.Label>
        <select
       
       className="form-control"
          id={id}
          key={resetKey}
          value={value || ""}
          onBlur={() => setIsTouched(true)}
          aria-invalid={showError}
          aria-describedby={!isValid ? `${id}-error` : null}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
        >
          {(options || []).map((item) => (
            <option key={item.value} value={item.value}>
              {item.label || item.value}
            </option>
          ))}
        </select>
      </Form.Group>
      {showError && (
        <div id={`${id}-error`} className="demo-form-feedback">
          {errorMessage}
        </div>
      )}
    </div>
  );
};
