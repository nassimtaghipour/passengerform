import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formiz, useForm, FormizStep } from "@formiz/core";
import { isEmail, isNumber,isMinLength } from "@formiz/validations"; // Import some validations
import { MyField } from "./MyField"; // Import your field
import { MySelect } from "./MySelect";
import { useHistory } from "react-router-dom";
import  country_list  from "./country_list.json";
const defaultCollection = [
  {
    id: uuidv4(),
    familyFullname: "",
  },
];
export const MyForm = () => {
 const country_obj = country_list.country_list.map(item=> {return({"value": item})});

 const country = [
    { value: "", label: "select" },

  ];
  let countreis = [...country, ...country_obj];
 
  const history = useHistory();
  const myForm = useForm();
  const [isLoading, setIsLoading] = React.useState(false);
  const submitForm = (values) => {
    history.push("/Terminate");
    //just for showing how data can be pass to the server
    console.log(JSON.stringify(values));
    setIsLoading(true);
  };

  const [collection, setCollection] = useState(defaultCollection);

  const addItemAtIndex = (index) => {
    setCollection((c) => [
      ...c.slice(0, index + 1),
      {
        id: uuidv4(),
      },
      ...c.slice(index + 1),
    ]);
  };

  const removeItem = (id) => {
    setCollection((c) => c.filter((x) => x.id !== id));
  };
  return (
    <section>
    <Formiz onValidSubmit={submitForm} connect={myForm}>
      <Form
        noValidate
        onSubmit={myForm.submitStep}
        className="demo-form mainForm"
      >
        <div className="demo-form__content">
          <FormizStep name="step1">
            <MyField
              name="fullName"
              label="Full Name"
              required="FullName is required"
            />

            <MyField
              name="age"
              label="Age"
              required="Age is required"
              validations={[
                {
                  rule: isNumber(),
                  message: "This is not a number",
                },
              ]}
            />
            <MyField
              name="email"
              label="Email"
              type="email"
              required="Email is required"
              validations={[
                {
                  rule: isEmail(),
                  message: "Not a valid email",
                },
              ]}
            />
            <div className="row">
              <div className="col-1">
                <div className="demo-form-group ">
                  <div className="form-group mt-5">
                    <label className="demo-label form-label">Address:</label>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <MySelect
                  as="select"
                  name={`address.country`}
                  label="Country"
                  required="Country is required"
                  options={countreis}
                />
              </div>
              <div className="col-4">
                <MyField
                  name={`address.street`}
                  label="Street"
                  required="Street is required"
                />
              </div>
              <div className="col-3">
                <MyField
                  name={`address.idexZip`}
                  label="Index/Zip"
                  required="Index/Zip is required"
                  validations={[
                    {
                      rule: isNumber(),
                      message: "This is not a number",
                    },
                  ]}
                />
              </div>
            </div>

            <MyField
              name="PhoneNumber"
              label="Phone Number"
              required="PhoneNumber is required"
              validations={[
                {
                  rule: isNumber(),
                  message: "This should be in phone format",
                 
            
                },
                {
                  rule: isMinLength(5),
                  message: "This should be in phone format",
                }
              ]}
            />
          </FormizStep>

          <FormizStep name="step2">
            {collection.map(({ id, familyFullname }, index) => (
              <div
                key={id}
                spacing="4"
                className="dynamicForm"
                data-test={`repeater-item[${index}]`}
              >
                <MyField
                  name={`collection[${index}].familyFullname`}
                  defaultValue={familyFullname}
                  label="Full Name"
                  required="Full Name Required"
                />

                <MyField
                  name={`collection[${index}].familyAge`}
                  label="Age"
                  required="Age is required"
                  validations={[
                    {
                      rule: isNumber(),
                      message: "This is not a number",
                    },
                  ]}
                />
                <Button
                  variant="outline-success"
                  value="Add"
                  className="d-inline float-left"
                  onClick={() => addItemAtIndex(index)}
                  disabled={collection.length > 20}
                  pointerEvents={index + 1 >= collection.length ? "none" : null}
                  opacity={index + 1 >= collection.length ? 0 : null}
                >
                  Add one more
                </Button>

                {index > 0 ? (
                  <Button
                    value="Delete"
                    variant="outline-danger"
                    className="d-inline float-right"
                    onClick={() => removeItem(id)}
                  >
                    Delete
                  </Button>
                ) : null}
              </div>
            ))}
          </FormizStep>
        </div>

        <div className="demo-form__footer">
          <div className="mr-auto" style={{ minWidth: "6rem" }}>
            {!myForm.isFirstStep && (
              <Button
                variant="secondary"
                className="demo-button is-full"
                type="button"
                onClick={myForm.prevStep}
              >
                Previous
              </Button>
            )}
          </div>
          <div className="text-sm text-gray-500 p-2 text-center w-full xs:w-auto order-first xs:order-none">
            Step {myForm.currentStep && myForm.currentStep.index + 1} of{" "}
            {myForm.steps.length}
          </div>
          <div className="ml-auto" style={{ minWidth: "6rem" }}>
            {myForm.isLastStep ? (
              <Button
                className="demo-button is-full is-primary"
                type="submit"
                disabled={
                  isLoading || (!myForm.isValid && myForm.isStepSubmitted)
                }
              >
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            ) : (
              <Button
                className="demo-button is-full is-primary"
                type="submit"
                disabled={!myForm.isStepValid && myForm.isStepSubmitted}
              >
                Next
              </Button>
            )}
          </div>
        </div>
      </Form>
    </Formiz>
    </section>
  );
};
