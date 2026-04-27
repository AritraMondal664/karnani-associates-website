const team = [
  {
    name: "CA Dilip Kumar Karnani",
    exp: "43+ years experience",
  },
  {
    name: "CA Aadarsh Kabra",
    exp: "5+ years experience",
  },
  {
    name: "CA Rinku Sultania",
    exp: "5+ years experience",
  },
];

const Team = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-10">
          Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div key={index} className="p-6 border rounded-xl shadow">
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-500">{member.exp}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Team;