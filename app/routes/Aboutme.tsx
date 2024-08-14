import { MetaFunction } from "@remix-run/react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export let meta: MetaFunction = () => {
  return [
    { title: "About Me | PortfolioV2" },
    { name: "description", content: "This is a description for Remix page" }
  ];
};


export default function Aboutme() {
  return (
    <>
      <Navbar />
      <div className="mockup-window bg-base-300 border mt-16">
        <div className="bg-base-200 px-8 py-16">
          <h1 className="text-2xl font-bold mb-4">Profil Saya</h1>
          <p className="mb-4 text-justify">
            Nama saya <strong>Bima Adam Nugraha</strong>. Saya memiliki berbagai keahlian di beberapa bidang yang berbeda, antara lain:
          </p>
          <ul className="list-disc pl-5 mb-4 text-justify">
            <li><strong>Fotografi</strong>: Keahlian saya dalam bidang fotografi telah memberikan saya pengalaman dan keterampilan dalam menangkap dan mengolah gambar dengan kualitas tinggi.</li>
            <li><strong>Pengembangan Fullstack</strong>: Sebagai seorang pengembang fullstack, saya terampil dalam pembuatan aplikasi web dari front-end hingga back-end, menguasai berbagai teknologi dan bahasa pemrograman.</li>
            <li><strong>Perbaikan Elektronik</strong>: Saya memiliki kemampuan dalam memperbaiki perangkat elektronik seperti HP, laptop, dan mobil, yang merupakan salah satu hobi saya.</li>
            <li><strong>Model 3D dengan Blender</strong>: Saya juga memiliki keterampilan dalam membuat model 3D menggunakan perangkat lunak Blender, yang memungkinkan saya untuk menciptakan desain yang kompleks dan menarik.</li>
            <li><strong>Desain Grafis</strong>: Walaupun tidak mendalam, saya memiliki keterampilan dasar dalam desain grafis untuk kebutuhan desain tipis.</li>
          </ul>
          <h2 className="text-xl font-semibold mb-2">Pengalaman Kerja</h2>
          <p className="text-justify">
            Saya memiliki pengalaman kerja di bidang otomotif sebagai <strong>Staff di PT Sejahtera Buana Trada Suzuki</strong>. Selama bekerja di perusahaan ini, saya memperoleh pengetahuan dan keterampilan berharga terkait industri otomotif, yang memperkaya pengalaman profesional saya.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
