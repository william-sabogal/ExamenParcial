import React from "react";
import { useState } from "react";

export default function Card({ title, author }) {
  return (
    <div style={{ border: "1px solid white", padding: "10px" }}>
      <h3>Hi, your Book has been registered!</h3>
      <h4>Title: {title}</h4>
      <h4>Author: {author}</h4>
    </div>
  );
}
