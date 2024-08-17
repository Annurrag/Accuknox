import React from "react";

function Widget({ widget, category, onRemove }) {
  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button onClick={() => onRemove(category, widget.id)}>Remove</button>
    </div>
  );
}

export default Widget;
