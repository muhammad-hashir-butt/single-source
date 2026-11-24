// src/components/PageBanner.jsx
export default function PageBanner({ children }) {
  return (
    <section className="w-full bg-[#d6d6d6] py-14 px-4 text-center">
      <div className="max-w-4xl mx-auto">{children}</div>
    </section>
  );
}