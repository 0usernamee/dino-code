import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-green-800 p-4 flex items-center">
        <button className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex items-center ml-4">
          <Image
            src="/dino-logo.svg"
            alt="DinoCode Logo"
            width={32}
            height={32}
            className="mr-2"
          />
          <span className="text-white text-xl">DinoCode</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-between relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-green-100">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='10' fill='%2322c55e' opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        {/* Welcome Content */}
        <div className="z-10 flex flex-col items-center justify-center flex-1 w-full px-4">
          <h1 className="text-5xl font-bold mb-12">Welcome!</h1>
          
          <div className="w-full max-w-xs space-y-4">
            <Link href="/signin">
              <button className="w-full py-3 px-4 bg-green-200 text-gray-800 rounded-lg hover:bg-green-300 transition-colors">
                Sign in
              </button>
            </Link>
            
            <Link href="/register">
              <button className="w-full py-3 px-4 bg-green-200 text-gray-800 rounded-lg hover:bg-green-300 transition-colors">
                Register
              </button>
            </Link>
          </div>
        </div>

        {/* Dino Face */}
        <div className="absolute bottom-0 w-full h-48 bg-contain bg-bottom bg-no-repeat"
          style={{
            backgroundImage: `url("/dino-face.svg")`
          }}>
        </div>
      </div>
    </main>
  );
} 