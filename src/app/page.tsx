import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#191414]">
      <video className="w-auto h-auto rounded-[40px]" src="/spotify-wrapped.mov" autoPlay loop muted />
    </div>
  );
};

