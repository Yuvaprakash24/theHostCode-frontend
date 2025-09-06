import React from "react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  testimonial: string;
  image?: string;
  alt?: string;
  className?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  testimonial,
  image,
  alt = "",
  className = "",
}) => {
  return (
    <div
      className={`bg-teal-50 rounded-4xl shadow-lg p-9 flex items-start gap-3 max-w-xl ${className}`}
    >
      {/* Left side - Image and Name */}
      <div className="flex-shrink-0">
        {image && (
          <img
            src={image}
            alt={alt || name}
            className="w-20 h-20 rounded-2xl object-cover mb-3"
          />
        )}
        <div>
          <h3 className="font-bold text-xl text-gray-900 mb-1">{name}</h3>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="flex">
        <p className="text-gray-700 leading-relaxed text-sm ">&quot;{testimonial}&quot;</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
