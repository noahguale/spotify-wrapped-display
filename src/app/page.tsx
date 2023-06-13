import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <video className="w-auto h-auto" src="/spotify-wrapped.mov" autoPlay loop muted />
    </div>
  );
};

