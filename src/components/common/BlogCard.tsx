import React from 'react';
import Link from 'next/link';
import Card from './Card';

interface BlogPost {
  id: number;
  category: string;
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  image?: string;
}

interface BlogCardProps {
  post: BlogPost;
  showDescription?: boolean;
  variant?: 'default' | 'elevated' | 'outlined' | 'glass' | 'soft';
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  post, 
  showDescription = false,
  variant = 'elevated'
}) => {
  return (
    <Link href={`/blogs/${post.slug}`}>
      <Card
        variant={variant}
        className="h-full hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
        shadow="shadow-lg hover:shadow-xl"
      >
        {/* Image Section */}
        <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-300 relative overflow-hidden -m-6 mb-4 rounded-t-2xl">
          {post.image ? (
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <div className="text-4xl text-gray-400"></div>
            </div>
          )}
          
         
        </div>

        {/* Content section */}
    <div className="bg-white pt-2 pb-4 px-4 ">
      {/* Category Badge */}
      <span className="inline-block bg-gray-100 text-xs font-semibold px-5 py-1 rounded-full text-gray-800 mb-2">
        {post.category}
      </span>

      {/* Title */}
      <h3 className="text-lg font-semibold text-black line-clamp-2 group-hover:text-blue-600 transition-colors">
        {post.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm line-clamp-2">
        {showDescription ? post.description : post.excerpt}
      </p>

          
          {/* Footer */}
          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
            <span className="text-black font-medium group-hover:underline text-sm">
              Read more →
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;