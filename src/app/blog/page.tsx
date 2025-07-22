import { Header, Footer, LatestPosts } from '@/components';

export default function BlogsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <LatestPosts showAll={true} /> 
      </main>
      <Footer />
    </div>
  );
}