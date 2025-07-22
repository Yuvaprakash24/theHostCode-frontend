import {
  Header,
  Footer,
  MainSection,
  WhyChooseUs,
  AboutUs,
  Testimonials,
  
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <MainSection />
        <AboutUs />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
