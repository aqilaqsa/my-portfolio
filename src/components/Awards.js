import React from 'react';

function Awards() {
  return (
    <section className="p-8 bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Awards</h2>
      <ul className="space-y-2">
        <li className="text-gray-600 dark:text-gray-400">Award 1</li>
        <li className="text-gray-600 dark:text-gray-400">Award 2</li>
        {/* Add more as needed */}
      </ul>
    </section>
  );
}

export default Awards;
