import React from 'react';
import ServiceCard from '../common/ServiceCard';

// Services data
const servicesData = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    image: '/services/s1[1].png',
    href: '/services/artificial-intelligence'
  },
  {
    id: 'data-science',
    title: 'Data Science',
    image: '/services/s2[1].png',
    href: '/services/data-science'
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    image: '/services/s3[1].png',
    href: '/services/cloud-computing'
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    image: '/services/s4[1].png',
    href: '/services/web-development'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Designing',
    image: '/services/s5[1].png',
    href: '/services/ui-ux-design'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    image: '/services/s6[1].png',
    href: '/services/digital-marketing'
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
     

      {/* Main Content */}
      <main className="py-16 px-4 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-left mx-15 mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Services.</h2>
          
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              image={service.image}
              href={service.href}
            />
          ))}
        </div>

        {/* Call to Action Section */}
        
      </main>

     
    </div>
  );
};

export default ServicesPage;