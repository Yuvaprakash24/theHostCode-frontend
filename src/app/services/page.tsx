import { Header, Footer, ServiceCard } from '@/components';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServiceCard/> 
      </main>
      <Footer />
    </div>
  );
}