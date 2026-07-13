import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DashboardLayout from "./DashboardLayout";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/appointments`
      );

      setAppointments(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  // const logoutHandler = () => {
  //   localStorage.removeItem("token");
  //   navigate("/admin/login");
  // };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/appointments/${id}`,
        { status }
      );

      fetchAppointments();
    } catch (error) {
      console.error(error);
      alert("Failed to update status");
    }
  };

  const deleteAppointment = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this appointment?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/appointments/${id}`
      );

      fetchAppointments();
    } catch (error) {
      console.error(error);
      alert("Failed to delete appointment");
    }
  };

  const getStatusColor = (status) => {
    if (status === "New") {
      return "bg-yellow-100 text-yellow-700";
    }

    if (status === "Contacted") {
      return "bg-blue-100 text-blue-700";
    }

    if (status === "Closed") {
      return "bg-green-100 text-green-700";
    }

    return "bg-gray-100 text-gray-700";
  };

  const totalRequests = appointments.length;

  const newRequests = appointments.filter(
    (item) => item.status === "New"
  ).length;

  const contactedRequests = appointments.filter(
    (item) => item.status === "Contacted"
  ).length;

  const closedRequests = appointments.filter(
    (item) => item.status === "Closed"
  ).length;

  // return (
  //   <div className="min-h-screen bg-gray-100 p-6 md:p-8">

  return (
  <DashboardLayout>
    <div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">

        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Appointment Requests
          </h1>

          <p className="text-gray-500 mt-2">
            Manage and track client appointment enquiries
          </p>
        </div>

        {/* <button
          onClick={logoutHandler}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg shadow transition"
        >
          Logout
        </button> */}

      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-500 text-sm">
            Total Requests
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {totalRequests}
          </h2>
        </div>

        <div className="bg-yellow-50 rounded-xl shadow-md p-6 border border-yellow-100">
          <p className="text-yellow-700 text-sm">
            New Requests
          </p>

          <h2 className="text-4xl font-bold text-yellow-700 mt-2">
            {newRequests}
          </h2>
        </div>

        <div className="bg-blue-50 rounded-xl shadow-md p-6 border border-blue-100">
          <p className="text-blue-700 text-sm">
            Contacted
          </p>

          <h2 className="text-4xl font-bold text-blue-700 mt-2">
            {contactedRequests}
          </h2>
        </div>

        <div className="bg-green-50 rounded-xl shadow-md p-6 border border-green-100">
          <p className="text-green-700 text-sm">
            Closed
          </p>

          <h2 className="text-4xl font-bold text-green-700 mt-2">
            {closedRequests}
          </h2>
        </div>

      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">

        <div className="p-5 border-b">
          <h2 className="text-xl font-semibold">
            Client Appointment List
          </h2>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50">

              <tr>
                <th className="p-4 text-left font-semibold">
                  Name
                </th>

                <th className="p-4 text-left font-semibold">
                  Organization
                </th>

                <th className="p-4 text-left font-semibold">
                  Email
                </th>

                <th className="p-4 text-left font-semibold">
                  Phone
                </th>

                <th className="p-4 text-left font-semibold">
                  Service
                </th>

                <th className="p-4 text-left font-semibold">
                  Message
                </th>

                <th className="p-4 text-left font-semibold">
                  Submitted At
                </th>

                <th className="p-4 text-left font-semibold">
                  Status
                </th>

                <th className="p-4 text-left font-semibold">
                  Actions
                </th>
              </tr>

            </thead>

            <tbody>

              {appointments.map((item) => (
                <tr
                  key={item._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium">
                    {item.name}
                  </td>

                  <td className="p-4">
                    {item.organization}
                  </td>

                  <td className="p-4">
                    {item.email}
                  </td>

                  <td className="p-4">
                    {item.phone}
                  </td>

                  <td className="p-4">
                    {item.service}
                  </td>

                  <td className="p-4 max-w-xs">
                    {item.message}
                  </td>

                  <td className="p-4 whitespace-nowrap">
                    {new Date(
                      item.createdAt
                    ).toLocaleString()}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex gap-2">

                      <select
                        value={item.status}
                        onChange={(e) =>
                          updateStatus(
                            item._id,
                            e.target.value
                          )
                        }
                        className="border rounded-lg px-3 py-2"
                      >
                        <option value="New">
                          New
                        </option>

                        <option value="Contacted">
                          Contacted
                        </option>

                        <option value="Closed">
                          Closed
                        </option>
                      </select>

                      <button
                        onClick={() =>
                          deleteAppointment(item._id)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                      >
                        Delete
                      </button>

                    </div>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  </DashboardLayout>
);
};

export default Appointments;