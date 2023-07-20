import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Oops!</h1>
        <p className="text-gray-500 text-lg mb-8">
          It seems like you've lost your way.
        </p>
        <p className="text-gray-500 text-lg mb-8">
          Don't worry, let's get you back on track.
        </p>
        <Link href="/" className="text-blue-500 hover:underline">
          Go back to home
        </Link>
      </div>
    </div>
  );
}
