import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}) => {
  // Default style: blue button, white text, rounded, focus ring
  const defaultClasses =
    'px-6 py-3 font-semibold rounded-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-black text-white hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <button
      type={type}
      className={`${defaultClasses} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; 