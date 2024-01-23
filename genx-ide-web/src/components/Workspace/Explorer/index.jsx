import "./style.scss";

import React from "react";

function FolderOrFile({ item, level = 0 }) {
  const getIndentation = (level) => {
    const spaces = level * 10;
    return `${spaces}px`;
  };

  const indentation = getIndentation(level);

  if (item.type === "folder") {
    return (
      <div className="folder">
        <div className="folder-details" style={{ paddingLeft: indentation }}>
          <span className="folder-icon">📁</span>
          <span className="folder-name">{item.name}</span>
        </div>
        <div className="folder-contents">
          {item.contents.map((subItem, index) => (
            <FolderOrFile key={index} item={subItem} level={level + 1} />
          ))}
        </div>
      </div>
    );
  } else if (item.type === "file") {
    return (
      <div className="file">
        <div className="file-details">
          <span className="file-icon">📄</span>
          <span className="file-name">{item.name}</span>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

function Explorer() {
  const jsonData = {
    name: "Genx Project",
    type: "folder",
    contents: [
      {
        name: "index.html",
        type: "file",
      },
      {
        name: "style.css",
        type: "file",
      },
      {
        name: "style.css",
        type: "file",
      },
      {
        name: "style.css",
        type: "file",
      },
      {
        name: "style.css",
        type: "file",
      },
      {
        name: "src",
        type: "folder",
        contents: [
          {
            name: "app.js",
            type: "file",
          },
          {
            name: "components.js",
            type: "file",
          },
        ],
      },
      {
        name: "src",
        type: "folder",
        contents: [
          {
            name: "app.js",
            type: "file",
          },
          {
            name: "components.js",
            type: "file",
          },
        ],
      },
      {
        name: "src",
        type: "folder",
        contents: [
          {
            name: "app.js",
            type: "file",
          },
          {
            name: "components.js",
            type: "file",
          },
          {
            name: "components.js",
            type: "file",
          },
          {
            name: "components.js",
            type: "file",
          },
          {
            name: "components.js",
            type: "file",
          },
          {
            name: "components.js",
            type: "file",
          },
          {
            name: "components.js",
            type: "file",
          },
        ],
      },
    ],
  };

  return (
    <div className="explorer-wrapper">
      <FolderOrFile item={jsonData} />
    </div>
  );
}

export default Explorer;