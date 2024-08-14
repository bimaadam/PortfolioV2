import { useEffect, useRef } from 'react';
import Navbar from '~/components/Navbar';
import '~/styles/global.css';
import Footer from '~/components/Footer';
import Typed from 'typed.js';

export default function Index() {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Full Stack Developer", "Photographer", "3D Models", "Editing"],
      typeSpeed: 65,
      backSpeed: 45,
      loop: true
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy(); // Cleanup the Typed instance on component unmount
    };
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center h-screen relative">
          <h1 className="text-5xl font-bold text-center text-base-content">Bima Adam</h1>
          <div className="text-2xl mt-4 flex items-center">
            <h2 className="mr-2">I'm</h2>
            <p className="text-2xl text-violet-900">
              <span className="typing" ref={typedElement}></span>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
