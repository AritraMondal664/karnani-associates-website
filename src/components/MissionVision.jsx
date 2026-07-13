const MissionVision = () => {
  return (
    <div className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Mission */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-3 text-blue-600">
            Our Mission
          </h3>
          <p className="text-gray-600">
            To deliver exceptional, personalized financial solutions built on
            integrity, quality, and client-first approach.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-3 text-blue-600">
            Our Vision
          </h3>
          <p className="text-gray-600">
            To be the most trusted Chartered Accountancy firm known for
            excellence and long-term client relationships.
          </p>
        </div>

      </div>
    </div>
  );
};

export default MissionVision;