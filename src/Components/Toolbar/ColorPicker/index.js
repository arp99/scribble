import { useRef, useState } from "react";
import { useClickOutside } from "../../../Hooks";
import { Tooltip } from "react-tooltip";
import { SketchPicker, ChromePicker } from "react-color";

const ColorPicker = ({ isOpen, setIsOpen, children }) => {
  const [color, setColor] = useState("#000000");
  const ref = useRef(null);

  useClickOutside(ref, () => {
    if (isOpen) setIsOpen(false);
  });

  const handleChange = (newColor) => {
    setColor(newColor.hex);
  };

  return (
    <div
      id="pencil-color-tool__container"
      onClick={() => {
        setIsOpen(true);
      }}
      ref={ref}
    >
      <a data-tooltip-id="pencil-color-click">{children}</a>
      <Tooltip
        clickable
        id="pencil-color-click"
        isOpen={isOpen}
        opacity={1}
        style={{
          backgroundColor: "#f6f6f6",
          color: "#000",
          boxShadow: "2px 2px solid #000",
        }}
        place="bottom-start"
      >
        <div className="container">
          <ChromePicker color={color} disableAlpha onChange={handleChange} />
        </div>
      </Tooltip>
    </div>
  );
};

export default ColorPicker;
