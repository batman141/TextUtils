import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [text, setText] = useState("Enable Dark Mode");

  // const onClickHandler = () => {
  //   if (myStyle.color === "white" && myStyle.backgroundColor === "black") {
  //     setMyStyle({ color: "black", backgroundColor: "white" });
  //     setText("Enable Dark Mode");
  //   } else {
  //     setMyStyle({ color: "white", backgroundColor: "black" });
  //     setText("Enable Light Mode");
  //   }
  // };

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "rgb(54 71 98)" : "white",
  };
  let myStyle2 = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "rgb(77 99 122)" : "white",
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="mb-4">About Us</h1>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle2}
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or time to read.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle2}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that provides instant
              word cound and character count statistics for a given text.
              TextUtils reports number of words and characters. This is suitable
              for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle2}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browser like Chrome,
              Firefox, Safari, Opera, Edge,etc. It suits to count characters in
              facebook, excel documents, books, pdf documents, bolgs, essays and
              other write-ups.
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container my-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={onClickHandler}
        >
          {text}
        </button>
      </div> */}
    </div>
  );
}
