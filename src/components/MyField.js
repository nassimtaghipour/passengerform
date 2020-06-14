// This component is used for creating form elelemnts
import React from "react";
import { useField } from "@formiz/core";
import Form from "react-bootstrap/Form";
export const MyField = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(
    props
  );
  const { label, type, required, as } = props;
  const [isTouched, setIsTouched] = React.useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  return (
    <div className={`demo-form-group ${showError ? "is-error" : ""}`}>
      <Form.Group>
        <Form.Label className="demo-label" htmlFor={id}>
          {label}
          {!!required && " *"}
        </Form.Label>
        <Form.Control
          as={as}
          id={id}
          type={type || "text"}
          value={value ?? ""}
          className="demo-input"
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setIsTouched(true)}
          aria-invalid={showError}
          aria-required={!!required}
          aria-describedby={showError ? `${id}-error` : null}
        />
      </Form.Group>
      {showError && (
        <div id={`${id}-error`} className="demo-form-feedback">
          {errorMessage}
        </div>
      )}
    </div>
  );
};
