import React from 'react';

function Portfolio() {
  return (
    <section className="p-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Data Analysis & Machine Learning</h3>
          <p className="text-gray-600 dark:text-gray-400">Brief details about data-related projects.</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Web Development</h3>
          <p className="text-gray-600 dark:text-gray-400">Brief details about web projects.</p>
        </div>
        {/* Add other categories similarly */}
      </div>
    </section>
  );
}

export default Portfolio;
