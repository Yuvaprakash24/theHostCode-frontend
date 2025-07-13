import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'glass' | 'soft';
  className?: string;
  onClick?: () => void;
  shadow?: string;
  rounded?: string;
  image?: string;
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  footer,
  variant = 'default',
  className = '',
  onClick,
  shadow = 'shadow-xl',
  rounded = 'rounded-2xl',
  image,
  icon
}) => {
  const baseClasses = 'transition-all duration-200';
  const variantClasses = {
    default: 'bg-white shadow-sm border border-gray-200',
    elevated: 'bg-white shadow-lg border border-gray-200 hover:shadow-2xl',
    outlined: 'bg-white border-2 border-gray-200',
    glass: 'bg-white/30 backdrop-blur-md border border-gray-100 shadow-lg',
    soft: 'bg-gray-50 shadow-md border border-gray-100'
  };
  const clickableClasses = onClick ? 'cursor-pointer hover:scale-[1.02]' : '';
  const classes = `${baseClasses} ${variantClasses[variant]} ${shadow} ${rounded} ${clickableClasses} ${className}`;

  // If only image is provided and no other content, render just the image
  if (image && !children && !title && !subtitle && !footer && !icon) {
    return (
      <img src={image} alt={title || 'Card image'} className={`w-full object-cover ${rounded}`} />
    );
  }

  return (
    <div className={classes} onClick={onClick}>
      {image && (
        <img src={image} alt={title || 'Card image'} className={`w-full object-cover ${rounded} mb-2`} />
      )}
      {icon && (
        <div className="flex justify-center items-center text-4xl mb-2">{icon}</div>
      )}
      {(title || subtitle) && (
        <div className="px-6 py-4 border-b border-gray-200">
          {title && (
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="px-6 py-4">{children}</div>
      {footer && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card; 