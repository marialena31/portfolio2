import React, { useState, ReactNode } from 'react';

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  initialTab?: number;
  activeTab?: number;
  onTabChange?: (idx: number) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  initialTab = 0,
  activeTab,
  onTabChange,
  className = '',
}) => {
  const [internalTab, setInternalTab] = useState(initialTab);
  const currentTab = typeof activeTab === 'number' ? activeTab : internalTab;
  const handleTabChange = (idx: number) => {
    if (onTabChange) {
      onTabChange(idx);
    } else {
      setInternalTab(idx);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex border-b border-primary/20 mb-6" role="tablist">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`px-6 py-3 font-semibold text-base focus:outline-none transition-colors duration-200
              ${
                currentTab === idx
                  ? 'text-primary border-b-2 border-primary bg-white'
                  : 'text-gray-500 hover:text-primary'
              }
            `}
            onClick={() => handleTabChange(idx)}
            aria-selected={currentTab === idx}
            aria-controls={`tab-panel-${idx}`}
            role="tab"
            tabIndex={currentTab === idx ? 0 : -1}
            id={`tab-${idx}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div id={`tab-panel-${currentTab}`} role="tabpanel" className="w-full">
        {tabs[currentTab].content}
      </div>
    </div>
  );
};

export default Tabs;
