// src/components/PageBanner.jsx
export default function PageBanner({ children }) {
  return (
    <section className="w-full bg-white border-b border-gray-200 pt-10 pb-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="w-12 h-1 bg-[#d91b5c] mb-4" />
        {children}
      </div>
    </section>
  );
}