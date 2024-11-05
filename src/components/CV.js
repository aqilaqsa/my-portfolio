import React from 'react';

function CV() {
  return (
    <section className="p-8 bg-gray-50 dark:bg-gray-700">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">CV</h2>
      <a href="link-to-your-cv.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">
        Download My CV
      </a>
    </section>
  );
}

export default CV;
