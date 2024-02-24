import { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import { useClickOutside } from "../../../Hooks";

/**
 * Shows the slider change the pencil width
 */
const PencilWidthPicker = ({ isOpen, setIsOpen, children }) => {
  const [sliderValue, setSliderValue] = useState(1);
  const [thumbPosition, setThumbPosition] = useState({
    left: "0px",
    lineWidth: "0%",
  });

  const ref = useRef(null);
  const slider_input = useRef(null);
  const slider_thumb = useRef(null);
  // Close on outside click, and show when clicked
  useClickOutside(ref, () => {
    if (isOpen) setIsOpen(false);
  });

  const getThumbPosition = () => {
    const position = sliderValue > 1 ? sliderValue / 100 : 0;
    const space =
      slider_input.current?.offsetWidth - slider_thumb.current?.offsetWidth;

    setThumbPosition({
      left: `${position * space}px`,
      lineWidth: `${sliderValue}%`,
    });
  };

  useEffect(() => {
    getThumbPosition();
  }, [sliderValue]);

  return (
    <div
      id="pencil-width-tool__container"
      onClick={() => {
        setIsOpen(true);
      }}
      ref={ref}
    >
      <a data-tooltip-id="pencil-width-click">{children}</a>
      <Tooltip
        clickable
        id="pencil-width-click"
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
          <div className="relative h-16 w-60">
            <div
              className="range-slider_thumb 
              absolute left-0 top-1/2 
              z-[2] flex h-6 w-6 
              -translate-y-1/2 items-center 
              justify-center rounded-full 
              border-[1.5px] border-solid 
            border-slate-700 bg-slate-50 text-[0.5rem]
             font-bold text-slate-700"
              ref={slider_thumb}
              style={{
                left: thumbPosition.left,
              }}
            >
              {sliderValue}
            </div>
            <div className="range-slider_line absolute left-0 top-1/2 z-[1] h-1 w-full -translate-y-1/2 bg-[#e1e1e1]">
              <div
                className="absolute h-1 w-0 bg-slate-700"
                style={{
                  width: thumbPosition.lineWidth,
                }}
              ></div>
            </div>
            <input
              ref={slider_input}
              className="range-slider_input absolute left-0 top-1/2 z-[3] 
              m-0 h-1 w-full -translate-y-1/2 appearance-none opacity-0 
              [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 
              [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none 
              [&::-webkit-slider-thumb]:rounded-full 
              [&::-webkit-slider-thumb]:opacity-0"
              type="range"
              value={sliderValue}
              min="1"
              max="100"
              onInput={(evt) => {
                setSliderValue(evt.target.value);
              }}
            />
          </div>
        </div>
      </Tooltip>
    </div>
  );
};

export default PencilWidthPicker;
