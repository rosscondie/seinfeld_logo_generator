import React from 'react';
import triangleImage from '../src/assets/triangle.png';

const LogoCharacter = ({ character }) => {
  const isDotReplaced = character === 'i' || character === 'j';

  const replaceDot = () => {
    if (character === 'i') {
      return 'ı';
    } else if (character === 'j') {
      return 'ȷ';
    } else {
      return character;
    }
  };

  return (
    <span className="logo-character">
      {isDotReplaced ? (
        <>
          {replaceDot()}
          <img
            src={triangleImage}
            alt="triangle"
            className="tittle"
            style={{ verticalAlign: 'middle' }}
          />
        </>
      ) : (
        character
      )}
    </span>
  );
};

export default LogoCharacter;
