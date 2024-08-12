import Navbar from '~/components/Navbar';
import '~/styles/global.css';
import Aboutme from './Aboutme';
import Footer from '~/components/Footer';

export default function Index() {
  return (
    <>
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-center text-base-content">Bima Adam</h1>
        <p className="text-2xl text-violet-900">Meroket Abangku 🚀</p>
      </div>
    </div>
    <Aboutme />
    <Footer />
    </>
    
  );
}
