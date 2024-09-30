import Dwindle from "./components/Dwindle";
import { useRef, useState } from "react";
import { addComponent, getConfig, removeComponent } from "./lib/data";
import { createId } from "@paralleldrive/cuid2";

function App() {
  const parentRef = useRef<HTMLDivElement>(null);
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  const [config, setConfig] = useState(
    getConfig([
      <p style={{ width: "100%", height: "100%", background: randomColor }}>
        Component
      </p>,
    ]),
  );

  return (
    <div ref={parentRef}>
      <button
        onClick={() => {
          setConfig(() =>
            addComponent(
              config,
              <p
                style={{
                  width: "100%",
                  height: "100%",
                  background: randomColor,
                }}
              >
                Component {createId()}
              </p>,
            ),
          );
        }}
      >
        Add a component
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Dwindle
          config={config}
          width={1400}
          height={800}
          onDelete={(leafId: string) => {
            const newConfig = removeComponent(config, leafId);
            if (newConfig) setConfig(newConfig);
          }}
          gap={4}
        />
      </div>
    </div>
  );
}

export default App;
