import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  icon,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out rounded-md';
  
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 shadow-sm hover:shadow',
    outline: 'bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-50',
  };
  
  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;