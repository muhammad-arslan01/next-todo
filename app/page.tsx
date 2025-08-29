import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">Hello World</h1>
      <p className="text-xl mb-8 max-w-2xl text-center">
        Welcome to our simple Next.js application.
      </p>
      <Link
        href="/about"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Visit About Page
      </Link>
    </div>
  );
}
