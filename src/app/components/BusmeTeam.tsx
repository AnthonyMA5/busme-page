
interface TeamMember {
    name: string;
    role: string;
    imageSrc: string;
  }
  
  interface TeamProps {
    members: TeamMember[];
  }
  
  const BusmeTeam: React.FC<TeamProps> = ({ members }) => {
    return (
      <div className="mx-auto max-w-7xl py-16 sm:px-6 lg:px-8 font-poppins">
        <h2 className="font-semibold text-6xl mb-10 text-center text-complementary-900">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                src={member.imageSrc}
                alt={member.name}
                className="h-32 w-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-primary-900">{member.name}</h3>
              <p className="text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BusmeTeam;