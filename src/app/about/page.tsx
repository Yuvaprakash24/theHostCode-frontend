import { Header, Footer} from '@/components';
import Aboutus from '@/components/About/Aboutus';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Aboutus /> 
      </main>
      <Footer />
    </div>
  );
}