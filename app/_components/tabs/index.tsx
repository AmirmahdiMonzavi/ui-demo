"use client";

import Link from "next/link";

import React, { useEffect, useRef, useState } from "react";

import { twMerge } from "tailwind-merge";

export type ItemsType = {
  key: string;
  label: string;
  children: React.ReactNode;
};

export type TabsPropsType = {
  defaultActiveKey: string;
  items: ItemsType[];
  position?: "top" | "bottom";
  query?: object;
};

const Tabs = ({ defaultActiveKey, items, position = "bottom", query }: TabsPropsType) => {
  const [activeTab, setActiveTab] = useState(defaultActiveKey);
  const [isTabsSticky, setIsTabsSticky] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (key: string) => {
    if (activeTab !== key) {
      setActiveTab(key);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (tabsRef) {
        const tabsPosition = tabsRef.current?.getBoundingClientRect().top;
        if (tabsPosition && tabsPosition <= 71) {
          setIsTabsSticky(true);
        } else {
          setIsTabsSticky(false);
        }
      }
    };

    document.body.addEventListener("scroll", handleScroll);

    return () => document.body.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      <div
        ref={tabsRef}
        className={twMerge(isTabsSticky && "sticky top-[71px] z-10 -mx-1 bg-oil-01 pt-6 transition-all")}
      >
        <div className="flex w-full gap-3">
          {items.map((tab) => (
            <Link
              className="flex flex-col items-center gap-4 focus:outline-none"
              onClick={() => handleTabClick(tab.key)}
              key={tab.key}
              href={{
                query: {
                  tab: tab.label,
                  ...query,
                },
              }}
            >
              <div
                className={twMerge(
                  "relative flex h-10 w-full flex-col items-center text-lg text-sm",
                  activeTab === tab.key ? "font-bold text-primary-06" : "font-normal text-secondary-07",
                )}
              >
                <div
                  className={twMerge(
                    "absolute h-1 w-3/4",
                    position === "bottom" ? "bottom-0 w-full" : "top-0 rounded-bl-[4px] rounded-br-[4px]",
                    activeTab === tab.key ? "bg-primary-06" : "bg-transparent",
                  )}
                ></div>
                <span className={twMerge("px-1", position === "bottom" ? "mb-3" : "mt-3")}>{tab.label}</span>
              </div>
            </Link>
          ))}
        </div>
        {position === "bottom" && <hr className="mt-1" />}
      </div>
      {items.map(
        (tabItem) =>
          tabItem.key === activeTab && (
            <div key={tabItem.key} className={twMerge(tabItem.key === activeTab && "mt-6")}>
              {tabItem.children}
            </div>
          ),
      )}
    </div>
  );
};

export default Tabs;
