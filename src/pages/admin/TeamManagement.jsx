import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "./DashboardLayout";

const TeamManagement = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    bio: "",
  });
  const [photo, setPhoto] = useState(null);

  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("token");

  const authConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/team`
      );

      setTeamMembers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();

    data.append("name", formData.name);
    data.append("title", formData.title);
    data.append("bio", formData.bio);

    if (photo) {
      data.append("photo", photo);
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    if (editingId) {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/team/${editingId}`,
        data,
        config
      );
    } else {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/team`,
        data,
        config
      );
    }

    setFormData({
      name: "",
      title: "",
      bio: "",
    });
    setPhoto(null);

    setPhoto(null);
    setEditingId(null);

    fetchTeamMembers();

    alert(
      editingId
        ? "Team member updated successfully"
        : "Team member added successfully"
    );
  } catch (error) {
    console.error(error);
    console.log(
      "Backend Error:",
      error.response?.data
    );

    alert("Operation failed");
  }
};

  const editMember = (member) => {
    setEditingId(member._id);

    setFormData({
      name: member.name,
      title: member.title,
      bio: member.bio || "",
    });
  };

  const deleteMember = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this member?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/team/${id}`,
        authConfig
      );

      fetchTeamMembers();

      alert("Team member deleted successfully");
    } catch (error) {
      console.error(error);

      console.log(
        "Backend Error:",
        error.response?.data
      );

      alert("Delete failed");
    }
  };

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Team Management
        </h1>

        <p className="text-gray-500 mb-8">
          Manage all team members displayed on the website.
        </p>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {editingId
              ? "Edit Team Member"
              : "Add Team Member"}
          </h2>

          <form
            onSubmit={submitHandler}
            className="grid md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="border p-3 rounded-lg"
              required
            />

            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                })
              }
              className="border p-3 rounded-lg"
              required
            />

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">
                Team Member Photo
              </label>

              <input
                type="file"
                accept=".jpg,.jpeg,.png,.webp"
                onChange={(e) =>
                  setPhoto(e.target.files[0])
                }
                className="border p-3 rounded-lg w-full"
              />
            </div>

            <textarea
              placeholder="Bio"
              value={formData.bio}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  bio: e.target.value,
                })
              }
              rows="4"
              className="border p-3 rounded-lg md:col-span-2"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg"
            >
              {editingId
                ? "Update Member"
                : "Add Member"}
            </button>
          </form>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-5 border-b">
            <h2 className="text-xl font-semibold">
              Team Members
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-left">
                    Name
                  </th>

                  <th className="p-4 text-left">
                    Title
                  </th>

                  <th className="p-4 text-left">
                    Bio
                  </th>

                  <th className="p-4 text-left">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {teamMembers.map((member) => (
                  <tr
                    key={member._id}
                    className="border-t"
                  >
                    <td className="p-4">
                      {member.name}
                    </td>

                    <td className="p-4">
                      {member.title}
                    </td>

                    <td className="p-4 max-w-md">
                      {member.bio}
                    </td>

                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            editMember(member)
                          }
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            deleteMember(member._id)
                          }
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
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

export default TeamManagement;