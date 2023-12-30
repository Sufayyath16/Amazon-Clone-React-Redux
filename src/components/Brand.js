import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const brands = [
  "Dennis Lingo",
  "Raymond",
  "Otus",
  "Red Tape",
  "Indo Primo",
  "Amazon Brand-Symbol",
];

export default function Brand(props) {
  return (
    <>
      <b>Brands</b>
      {brands.map((brand) => {
        return (
          <div key={`${brand}`} className="mb-3">
            <Form.Check
              type="checkbox"
              id={brand}
              label={brand}
              value={brand}
            />
          </div>
        );
      })}
    </>
  );
 
    }