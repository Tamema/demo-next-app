'use client';
import { FC } from 'react';

interface ButtonProps {
  handleButton?: () => void;
}

const Button: FC<ButtonProps> = ({ handleButton }) => {
  return (
    <div className='flex justify-center mt-16'>
      <button
        className='btn btn-primary rounded'
        onClick={handleButton}
      >
        Get Data
      </button>
    </div>
  );
};

export default Button;
