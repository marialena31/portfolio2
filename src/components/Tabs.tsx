import React, { useState, ReactNode } from 'react';

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  initialTab?: number;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, initialTab = 0, className = '' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex border-b border-primary/20 mb-6">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`px-6 py-3 font-semibold text-base focus:outline-none transition-colors duration-200
              ${
                activeTab === idx
                  ? 'text-primary border-b-2 border-primary bg-white'
                  : 'text-gray-500 hover:text-primary'
              }
            `}
            onClick={() => setActiveTab(idx)}
            aria-selected={activeTab === idx}
            aria-controls={`tab-panel-${idx}`}
            role="tab"
            tabIndex={activeTab === idx ? 0 : -1}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div id={`tab-panel-${activeTab}`} role="tabpanel" className="w-full">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
