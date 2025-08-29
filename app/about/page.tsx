import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg max-w-2xl text-center mb-8">
        This is the about page of our Next.js application. Here you can learn more
        about our company, team, or whatever this website is about.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg max-w-2xl mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-4">
          Our mission is to provide the best possible experience for our users by
          creating intuitive, fast, and beautiful web applications.
        </p>
        <p>
          We use cutting-edge technologies like Next.js, React, and Tailwind CSS
          to build modern web experiences.
        </p>
      </div>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}