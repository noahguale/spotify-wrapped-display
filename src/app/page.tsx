import Image from 'next/image'
import { Footer } from './Footer';
import { Header } from './Header';
import Phone from './Phone';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <div className="relative">
        <Phone />
        <video className="absolute top-24 left-9 w-[340px] h-[620px] rounded-[10px] " src="/spotify-wrapped.mov" autoPlay loop muted />
      </div>  

      {/* <video className="w-[360px] h-[640px] rounded-[40px]" src="/spotify-wrapped.mov" autoPlay loop muted /> */}
      <Footer />

    </div>
  );
};

