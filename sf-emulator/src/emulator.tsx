import React from "react";

export default function EmulatorFrame() {
  return (
    <iframe
      src="/emulator.html"
      style={{
        width: "100%",
        height: "90vh",
        border: "none",
      }}
      title="Street Fighter Emulator"
    />
  );
}
