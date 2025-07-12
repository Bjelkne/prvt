import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-zinc-800">
        <div className="text-2xl font-bold">prvt</div>
        <ul className="flex space-x-6 text-sm">
          <li className="hover:text-blue-500 cursor-pointer">Ladders</li>
          <li className="hover:text-blue-500 cursor-pointer">Om oss</li>
          <li className="hover:text-blue-500 cursor-pointer">Logga in</li>
          <li>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm">
              Sign Up
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero section */}
      <section className="text-center py-24 px-6 bg-[url('/hero-image.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-zinc-900/60">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Spela ladders. <br /> Bygg lagkemi. <br /> Bli bäst.
        </h1>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold">
            Gå med nu
          </button>
          <button className="border border-white hover:bg-zinc-800 px-6 py-3 rounded-lg text-lg font-semibold">
            Utforska ladders
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Funktioner</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-zinc-800 rounded-xl p-6">
            ✅ Skapa lag & spela ladders
          </div>
          <div className="bg-zinc-800 rounded-xl p-6">
            📊 Statistik & ranking
          </div>
          <div className="bg-zinc-800 rounded-xl p-6">
            🧠 Fokus på lagkemi
          </div>
          <div className="bg-zinc-800 rounded-xl p-6">
            🕒 Flexibla matcher, inga turneringstider
          </div>
        </div>
      </section>

      {/* Ladders */}
      <section className="py-16 px-6 bg-zinc-800">
        <h2 className="text-3xl font-bold mb-8 text-center">Ladderspel</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="font-semibold mb-2">Team A vs Team B</p>
            <p className="text-2xl">16 – 10</p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="font-semibold mb-2">Team C vs Team D</p>
            <p className="text-xl">Pågående</p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="font-semibold mb-4">Topplista</p>
            <ol className="space-y-2">
              <li>🥇 Team E</li>
              <li>🥈 Team F</li>
              <li>🥉 Team G</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
