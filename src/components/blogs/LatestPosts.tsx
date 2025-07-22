
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Card from '../common/Card';


interface BlogPost {
  id: number;
  category: string;
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
}

interface LatestPostsProps {
  showAll?: boolean; // If true, shows full blog page layout
  limit?: number;    
}

const LatestPosts: React.FC<LatestPostsProps> = ({ 
  showAll = false, 
  limit = 4 
}) => {
  const [activeCategory, setActiveCategory] = useState('All Articles');

  const categories = [
    'All Articles',
    'Artificial Intelligence',
    'Cloud Computing',
    'Data Science',
    'UI/UX Design',
    'Web Development',
    'Digital Marketing'
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      category: 'Digital Marketing',
      title: 'The Future of Digital Marketing: Trends to Watch in 2025',
      description: 'Discover the latest trends shaping digital marketing landscape',
      excerpt: 'Digital marketing continues to evolve rapidly with new technologies and consumer behaviors...',
      slug: 'future-of-digital-marketing-2025',
      publishedAt: '2024-12-15'
    },
    {
      id: 2,
      category: 'Cloud Computing',
      title: 'Serverless Architecture: Building Scalable Applications',
      description: 'Learn how serverless computing is revolutionizing development',
      excerpt: 'Serverless architecture offers unprecedented scalability and cost-effectiveness...',
      slug: 'serverless-architecture-guide',
      publishedAt: '2024-12-10'
    },
    {
      id: 3,
      category: 'Artificial Intelligence',
      title: 'AI-Powered Solutions for Modern Business Challenges',
      description: 'Explore how AI is transforming business operations',
      excerpt: 'Artificial intelligence is no longer a futuristic concept but a present-day reality...',
      slug: 'ai-powered-business-solutions',
      publishedAt: '2024-12-08'
    },
    {
      id: 4,
      category: 'UI/UX Design',
      title: 'Design Systems: Creating Consistent User Experiences',
      description: 'Build robust design systems for your applications',
      excerpt: 'A well-designed system ensures consistency and efficiency across all digital touchpoints...',
      slug: 'design-systems-guide',
      publishedAt: '2024-12-05'
    },
    {
      id: 5,
      category: 'Cloud Computing',
      title: 'Multi-Cloud Strategy: Benefits and Implementation',
      description: 'Navigate the complexities of multi-cloud environments',
      excerpt: 'Multi-cloud strategies provide flexibility and reduce vendor lock-in risks...',
      slug: 'multi-cloud-strategy-guide',
      publishedAt: '2024-12-03'
    },
    {
      id: 6,
      category: 'Web Development',
      title: 'Next.js 14: Advanced Features and Best Practices',
      description: 'Master the latest Next.js features for modern web apps',
      excerpt: 'Next.js 14 introduces powerful new features that enhance developer experience...',
      slug: 'nextjs-14-advanced-features',
      publishedAt: '2024-12-01'
    },
    {
      id: 7,
      category: 'Data Science',
      title: 'Machine Learning Operations: From Model to Production',
      description: 'Streamline your ML workflow with MLOps practices',
      excerpt: 'MLOps bridges the gap between machine learning development and production deployment...',
      slug: 'machine-learning-operations-guide',
      publishedAt: '2024-11-28'
    },
    {
      id: 8,
      category: 'UI/UX Design',
      title: 'Accessibility in Modern Web Design',
      description: 'Create inclusive digital experiences for all users',
      excerpt: 'Web accessibility ensures that digital products are usable by everyone...',
      slug: 'web-accessibility-guide',
      publishedAt: '2024-11-25'
    }
  ];

  const filteredPosts = activeCategory === 'All Articles' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const displayPosts = showAll ? filteredPosts : filteredPosts.slice(0, limit);

  return (
    <section className={`${showAll ? 'min-h-screen bg-gray-50' : 'py-16 bg-white'}`}>
      {/* Hero Section - only show on full blog page */}
      {showAll && (
        <div className="max-w-5xl mx-auto px-4 py-16">
  <div className="bg-[#D8D4CD] rounded-[32px] min-h-[500px] overflow-hidden flex flex-col md:flex-row shadow-lg">
    {/* Left Image */}
    <div className="md:w-1/2 animate-slide-infromright">
      <img
        src="/blog/blog.png"
        alt="Blog Visual"
        className="w-full h-full p-6 rounded-[40px] min-w-2s object-cover"
      />
    </div>

    {/* Right Content */}
    <div className="md:w-1/2 p-4 flex flex-col justify-center animate-slide-infromleft">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        This blog is something related to our work –<br /> you can read this and know more
      </h2>
      <p className="text-gray-800 mb-6">
        Very short description about the work we are doing about. Read this and know more about this.
      </p>
      <button className="bg-black text-white px-6 py-2 rounded-xl w-fit hover:bg-gray-900 transition">
        Read
      </button>
    </div>
  </div>
</div>

      )}

      {/* Section Header for Homepage */}
      {!showAll && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Posts</h2>
            <p className="text-gray-600 text-lg mb-8">
              Stay updated with our latest insights and expertise
            </p>
          </div>
        </div>
      )}

      {/* Category Filters - only show on full blog page */}
      {showAll && (
        <div id="articles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-black text-white'
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className={`grid grid-cols-1 md:grid-cols-2 ${showAll ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
          {displayPosts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.slug}`}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-300 relative overflow-hidden">
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {showAll ? post.description : post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-black font-medium hover:underline">
                      Read more
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button for Homepage */}
        {!showAll && (
          <div className="text-center mt-12">
            <Link 
              href="/blogs" 
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors inline-block"
            >
              View All Posts
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestPosts;