import React from 'react';

function SocialMedia() {
  return (
    <section className="p-8 bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Find Me On</h2>
      <ul className="space-y-2">
        <li><a href="link-to-github" className="text-blue-500 dark:text-blue-400 hover:underline">GitHub</a></li>
        <li><a href="link-to-linkedin" className="text-blue-500 dark:text-blue-400 hover:underline">LinkedIn</a></li>
        {/* Add more as needed */}
      </ul>
    </section>
  );
}

export default SocialMedia;
