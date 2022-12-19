import React, { useState } from "react";
import { PhotoshopPicker } from "react-color";

const ColorPicker = () => {
  const [color, setColor] = useState("#ff0000");
  return (
    <div>
      <h2>2. React Color Example with Fading Color Transition</h2>
      <PhotoshopPicker
        color={color}
        onChangeComplete={color => {
          setColor(color.hex);
        }}
      />
      <div
        style={{
          backgroundColor: color,
          height: "300px",
          transition: "ease all 500ms"
        }}
      />
    </div>
  );
};

export default ColorPicker;
