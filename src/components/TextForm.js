import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const onUpCLickHandler = () => {
    // console.log("Uppercase was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("success", "Converted to Uppercase");
  };

  const onLoCLickHandler = () => {
    // console.log("Lowercase was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    // props.showAlert("success", "Converted to Lowercase");
  };

  const onClearCLickHandler = () => {
    // console.log("Text was cleared");
    setText("");
    props.showAlert("warning", "Text Cleared");
  };

  const onRmSCLickHandler = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    // props.showAlert("success", "Removed Extra Spaces");
  };

  const onCopyClickHandler = () => {
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    // document.getSelection().removeAllRanges();
    props.showAlert("success", "Text Copied");
  };

  const onChangeHandler = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const countWords = (text) => {
    return text.split(" ").filter((el) => {
      return el.length !== 0;
    }).length;
    // return text.trim().split(/\s+/).length;
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="mb-4">{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="5"
            onChange={onChangeHandler}
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgb(77 99 122)" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <button
          className="btn btn-primary mx-1 my-1"
          onClick={onUpCLickHandler}
          disabled={text.length === 0}
        >
          Convert to Uppercase
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          onClick={onLoCLickHandler}
          disabled={text.length === 0}
        >
          Convert to Lowercase
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          onClick={onCopyClickHandler}
          disabled={text.length === 0}
        >
          Copy
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          onClick={onRmSCLickHandler}
          disabled={text.length === 0}
        >
          Remove Extra Space
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          onClick={onClearCLickHandler}
          disabled={text.length === 0}
        >
          Clear
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.length === 0 ? 0 : countWords(text)} words and {text.length}{" "}
          characters
        </p>
        <p>{text.length === 0 ? 0 : 0.008 * countWords(text)} Minutes Read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
