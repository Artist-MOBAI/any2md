"use client";

import React, { useEffect } from "react";
import { getCurrentWindow } from "@tauri-apps/api/window";

const TitleBar = () => {
  useEffect(() => {
    const appWindow = getCurrentWindow();

    document
      .getElementById("titlebar-minimize")
      ?.addEventListener("click", () => appWindow.minimize());
    document
      .getElementById("titlebar-maximize")
      ?.addEventListener("click", () => appWindow.toggleMaximize());
    document
      .getElementById("titlebar-close")
      ?.addEventListener("click", () => appWindow.close());
  }, []);

  return (
    <div
      data-tauri-drag-region
      className="fixed left-0 right-0 top-0 z-30 flex h-8 cursor-default select-none items-center justify-end space-x-1 pr-1"
    >
      <div
        className="w-auto border-b-2 border-mobai-black text-xl"
        id="titlebar-minimize"
      >
        <div>最小化</div>
      </div>
      <div
        className="w-auto border-b-2 border-mobai-black text-xl"
        id="titlebar-maximize"
      >
        <div>最大化</div>
      </div>
      <div
        className="w-auto border-b-2 border-mobai-black text-xl"
        id="titlebar-close"
      >
        <div>关闭</div>
      </div>
    </div>
  );
};

export default TitleBar;
