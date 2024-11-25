import React, { useState, useEffect } from "react";
import "../styles/App.css";

function App() {
  const [markdown, setMarkdown] = useState("# Hello Markdown!");
  const [renderedHTML, setRenderedHTML] = useState("");
  const [loading, setLoading] = useState(true);

  const parseMarkdown = (text) => {
    let parsedText = text;

    parsedText = parsedText.replace(/^# (.*$)/gim, "<h1>$1</h1>");
    parsedText = parsedText.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    parsedText = parsedText.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    parsedText = parsedText.replace(/\*\*(.*)\*\*/gim, "<b>$1</b>");
    parsedText = parsedText.replace(/_(.*)_/gim, "<i>$1</i>");
    // llknkn
    parsedText = parsedText.replace(/\n/gim, "<br>");

    return parsedText;
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setRenderedHTML(parseMarkdown(markdown));
      setLoading(false);
    }, 300); // Simulate loading state

    return () => clearTimeout(timer);
  }, [markdown]);

  return (
    <div className="app">
      <div className="textarea">
        <h2>Markdown Input</h2>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          rows="10"
          cols="50"
          placeholder="Write your markdown here..."
        ></textarea>
      </div>

      <div className="preview">
        <h2>Markdown Preview</h2>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: renderedHTML }}></div>
        )}
      </div>
    </div>
  );
}

export default App;
