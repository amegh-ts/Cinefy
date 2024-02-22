import Hero from "@/pages/Hero/Hero";
import Navbar from "@/pages/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
