import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-display font-bold text-6xl text-accent mb-4">404</h1>
      <h2 className="font-display font-bold text-2xl text-text mb-3">Page Not Found</h2>
      <p className="text-text-dim text-base max-w-md mb-8">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="btn-primary rounded-full px-6 py-3 text-sm tracking-wide"
      >
        Back to Home
      </Link>
    </div>
  );
}
