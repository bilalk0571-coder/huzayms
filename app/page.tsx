export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-yellow-500">
          HUZAYM'S
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-gray-300">
          Crafted Fragrances. Lasting Impressions.
        </p>

        <button className="mt-8 px-8 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
          Explore Collection
        </button>
      </section>

      {/* Collection */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-4xl text-center text-yellow-500 mb-12">
          Featured Collection
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Mariana */}
          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <img
              src="/images/mariana-trench.jpeg"
              alt="Mariana Trench"
              className="w-full h-80 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Mariana Trench
              </h3>

              <p className="text-yellow-500 mt-2">
                Eau De Parfum
              </p>

              <p className="text-gray-400 mt-4">
                Aquatic • Fresh • Mysterious
              </p>

              <p className="mt-2 italic">
                Dive into the depths of luxury.
              </p>

              <a
                href="https://wa.me/+91 8928042335?text=Hi%20I%20want%20to%20order%20Mariana%20Trench"
                target="_blank"
              >
                <button className="mt-6 w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold">
                  Order on WhatsApp
                </button>
              </a>
            </div>
          </div>

          {/* Cinnabon */}
          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <img
              src="/images/cinnabon.jpeg"
              alt="Cinnabon"
              className="w-full h-80 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Cinnabon
              </h3>

              <p className="text-yellow-500 mt-2">
                Extrait De Parfum
              </p>

              <p className="text-gray-400 mt-4">
                Sweet • Vanillic • Addictive
              </p>

              <p className="mt-2 italic">
                Indulge in timeless comfort.
              </p>

              <a
                href="https://wa.me/8928042335?text=Hi%20I%20want%20to%20order%20Cinnabon"
                target="_blank"
              >
                <button className="mt-6 w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold">
                  Order on WhatsApp
                </button>
              </a>
            </div>
          </div>

          {/* Crimson */}
          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <img
              src="/images/crimson-leather.jpeg"
              alt="Crimson Leather"
              className="w-full h-80 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Crimson Leather
              </h3>

              <p className="text-yellow-500 mt-2">
                Extrait De Parfum
              </p>

              <p className="text-gray-400 mt-4">
                Rosey • Leathery • Intoxicating
              </p>

              <p className="mt-2 italic">
                Dare to be unforgettable.
              </p>

              <a
                href="https://wa.me/8928042335?text=Hi%20I%20want%20to%20order%20Crimson%20Leather"
                target="_blank"
              >
                <button className="mt-6 w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold">
                  Order on WhatsApp
                </button>
              </a>
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}