import React from 'react';

const Copyright = () => {
  return (
    <div>
      {'Copyright © '}
      <a
        href="https://jacobbenaim.ca"
        target="_blank"
        rel="noreferer noopener noreferrer"
      >
        Jacob Benaim
      </a>{' '}

      {new Date().getFullYear()}

      {'.'}
    </div>
  );
}

export default Copyright;