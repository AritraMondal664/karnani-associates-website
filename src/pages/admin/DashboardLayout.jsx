import { Link, useLocation, useNavigate } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  const menuItems = [
    {
      name: "Appointments",
      path: "/admin/appointments",
    },
    {
      name: "Team Members",
      path: "/admin/team",
    },
    {
      name: "Testimonials",
      path: "/admin/testimonials",
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg border-r flex flex-col justify-between">

        <div>

          <div className="p-6 border-b">
            <h1 className="text-2xl font-bold text-gray-800">
              Karnani Admin
            </h1>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">

              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg transition ${
                      location.pathname === item.path
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>
          </nav>

        </div>

        <div className="p-4">
          <button
            onClick={logoutHandler}
            className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

      </div>

      {/* Content */}
      <div className="flex-1 p-8">
        {children}
      </div>

    </div>
  );
};

export default DashboardLayout;