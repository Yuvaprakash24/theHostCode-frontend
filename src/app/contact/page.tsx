import { Header, Footer, ContactPage } from '@/components';

export default function ContactPages() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactPage/> 
      </main>
      <Footer />
    </div>
  );
}