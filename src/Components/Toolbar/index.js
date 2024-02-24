import {
  Pencil,
  Palette,
  DownloadSimple,
  ArrowCounterClockwise,
  ArrowClockwise,
  Eraser,
} from "phosphor-react";
import PencilWidthPicker from "./PencilWidthPicker";
import { useState } from "react";
import ColorPicker from "./ColorPicker";
import EraserWidthPicker from "./EraserWidthPicker";

const Toolbar = () => {
  const [penWidthActive, setPenWidthActive] = useState(false);
  const [colorPickerActive, setColorPickerActive] = useState(false);
  const [eraserActive, setEraserActive] = useState(false);

  return (
    <div className="sticky top-0 flex h-16 w-full items-center bg-slate-700 p-2 drop-shadow-xl">
      {/* Pencil width choser  */}
      <div className="mx-auto flex w-max items-center gap-2">
        <div className={`action-btn ${penWidthActive ? "active" : ""}`}>
          <PencilWidthPicker
            isOpen={penWidthActive}
            setIsOpen={setPenWidthActive}
          >
            <Pencil weight="duotone" size={"32px"} color="#d4d6d8" />
          </PencilWidthPicker>
        </div>

        <div className={`action-btn ${colorPickerActive ? "active" : ""}`}>
          <ColorPicker
            isOpen={colorPickerActive}
            setIsOpen={setColorPickerActive}
          >
            <Palette weight="duotone" size={"32px"} color="#d4d6d8" />
          </ColorPicker>
        </div>
        <div className={`action-btn ${eraserActive ? "active" : ""}`}>
          <EraserWidthPicker isOpen={eraserActive} setIsOpen={setEraserActive}>
            <Eraser weight="duotone" size={"32px"} color="#d4d6d8" />
          </EraserWidthPicker>
        </div>

        <div className={`action-btn`}>
          <DownloadSimple weight="duotone" size={"32px"} color="#d4d6d8" />
        </div>

        <div className={`action-btn`}>
          <ArrowClockwise weight="duotone" size={"32px"} color="#d4d6d8" />
        </div>

        <div className={`action-btn`}>
          <ArrowCounterClockwise
            weight="duotone"
            size={"32px"}
            color="#d4d6d8"
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
