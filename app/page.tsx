export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-purple-900">
      <div className="text-center">
        <h1 className="text-5xl text-white font-bold mb-4">
          Welcome to Sortbrite!
        </h1>
        <p className="text-xl text-white mb-8">
          Discover the effortless and seamless solution for managing your cloud
          data.
        </p>
        <button className="bg-white text-black py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-200">
          Get Started
        </button>
      </div>
    </div>
  );
}
