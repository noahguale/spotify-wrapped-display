import Image from 'next/image'
import { Footer } from './Footer';
import { Header } from './Header';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <video className="w-auto h-auto rounded-[40px]" src="/spotify-wrapped.mov" autoPlay loop muted />
      <Footer />

    </div>
  );
};

