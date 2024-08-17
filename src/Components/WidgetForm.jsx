import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWidget } from "../slices/dashboardSlice";
import "./WidgetForm.css";

const WidgetForm = ({ category }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const allWidgets = useSelector((state) => state.dashboard.allWidgets);
  const nextId = allWidgets.length + 1;

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleAddWidget = () => {
    const newWidget = { id: nextId, name, text };
    dispatch(addWidget({ category, widget: newWidget }));
    setName("");
    setText("");
  };

  return (
    <div className="button-popup-container">
      <button onClick={handleButtonClick}>Add Widget +</button>
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={handleClosePopup}>
              X
            </button>
            <h2>Enter Details</h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="Text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAddWidget}>Add Widget+</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WidgetForm;
