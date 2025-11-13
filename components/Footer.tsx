'use client';

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        <p className="text-sm text-gray-500 font-light">
          © {new Date().getFullYear()} Body Observability. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
