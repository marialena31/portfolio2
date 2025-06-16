import React from 'react';
import { Link } from 'gatsby';

interface NeedsProps {
  title: string;
  items: Array<{
    question: string;
    solution: string;
    link: string;
  }>;
}

const Needs: React.FC<NeedsProps> = ({ title, items }) => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center mb-16 text-3xl md:text-4xl font-bold bg-gradient-to-tr from-primary to-primary-green bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {items.map((item, index) => (
            <Link
              to={item.link}
              className="group block rounded-lg p-6 min-w-[48px] min-h-[48px] bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-200 border border-primary/10 hover:border-primary hover:-translate-y-1"
              key={index}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-0">
                {item.question}
              </h3>
              <div className="text-2xl text-gray-400 dark:text-primary ml-4 transition-transform duration-200 group-hover:translate-x-2 group-hover:text-primary">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Needs;
