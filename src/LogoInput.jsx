import React, { useState, useRef } from 'react';
import LogoCharacter from './LogoCharacter';
import domtoimage from 'dom-to-image';

const LogoInput = () => {
  const [text, setText] = useState('');
  const logoRef = useRef(null);

  const handleInputChange = (e) => {
    // Replace only the lowercase "i" with "l" to eliminate the tittle
    const updatedText = e.target.value;
    setText(updatedText);
  };

  const handleSaveImage = () => {
    const logoContainer = document.querySelector('.seinfeld-logo-container');

    // Introduce a delay (e.g., 500 milliseconds) to allow the content to fully render
    setTimeout(() => {
      const canvas = document.createElement('canvas');
      canvas.width = logoContainer.offsetWidth;
      canvas.height = logoContainer.offsetHeight;

      domtoimage
        .toPng(logoContainer, {
          width: canvas.width,
          height: canvas.height,
          style: {
            height: `${canvas.height}px`,
          },
        })
        .then(function (dataUrl) {
          const link = document.createElement('a');
          link.download = 'seinfeld_logo.png';
          link.href = dataUrl;
          link.click();
        })
        .catch(function (error) {
          console.error('Error saving image:', error);
        });
    }, 500); // Adjust the delay as needed
  };

  // Function to handle image loading as a Promise
  const loadImage = (image) => {
    return new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
    });
  };

  return (
    <>
      <div className="seinfeld-logo-container">
        <h1 className="seinfeld-logo">
          {text.split('').map((char, index) => (
            <LogoCharacter key={index} character={char} />
          ))}
        </h1>
      </div>
      <div className="input--container">
        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={handleInputChange}
        />
        <button onClick={handleSaveImage}>Save Logo</button>
      </div>
    </>
  );
};

export default LogoInput;
