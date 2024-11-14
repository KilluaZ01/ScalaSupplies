// SlidingTab.jsx
import React, { useState, useRef, useEffect } from "react";

const SlidingTab = () => {
  const tabsRef = useRef([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabs = [
    { id: "overview", name: "Overview" },
    { id: "tracking", name: "Tracking" },
  ];

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  return (
    <div className="relative flex rounded-xl border bg-[#F0F0F0] px-1 backdrop-blur-sm mx-auto">
      <span
        className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-xl transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full bg-white" />
      </span>
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          ref={(el) => (tabsRef.current[index] = el)}
          className={`text-sm p-2 ${
            activeTabIndex === index
              ? "text-gray-700"
              : "hover:text-neutral-400 "
          } my-auto cursor-pointer select-none rounded-full px-4 text-center`}
          onClick={() => setActiveTabIndex(index)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default SlidingTab;
