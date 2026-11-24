// src/pages/Promotion.jsx
import { useState } from "react";

export default function Promotion() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.trim() === "singlesource") {
      setUnlocked(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      {!unlocked ? (
        <div className="max-w-xl">
          <p className="text-sm text-gray-700 mb-6">
            This content is password-protected. To view it, please enter the
            password below.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap items-center gap-3"
          >
            <label
              htmlFor="promo-password"
              className="text-sm text-gray-700"
            >
              Password:
            </label>
            <input
              id="promo-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-400 rounded px-3 py-2 w-56 text-sm focus:outline-none focus:border-[#00529b]"
            />
            <button
              type="submit"
              className="bg-[#00529b] hover:bg-[#003f78] text-white text-sm font-medium px-6 py-2.5 rounded transition-colors cursor-pointer"
            >
              Enter
            </button>
          </form>

          {error && <p className="text-xs text-[#d91b5c] mt-3">{error}</p>}
        </div>
      ) : (
        <div className="bg-gray-50 border border-gray-200 p-8 rounded">
          <h2 className="text-2xl font-semibold text-[#222222] mb-2">
            Exclusive Client Promotions
          </h2>
          <p className="text-sm text-gray-600">
            Welcome! Promotional campaign details are now unlocked.
          </p>
        </div>
      )}
    </div>
  );
}