import React, { useEffect, useState } from "react";
import usescrollPosition from "../hook/scroll-postion-hook";

export default function CUstomScrollPositionHook() {
  const scrollPosition = usescrollPosition();
  return (
    <div style={{ padding: "1000px 0" }}>
      <h2 style={{ position: "fixed", left: 0, top: 0 }}>
        {" "}
        CUstomScrollPositionHook{scrollPosition}
      </h2>
    </div>
  );
}
