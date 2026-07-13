import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "./DashboardLayout";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    content: "",
    rating: 5,
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/testimonials`
      );

      setTestimonials(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (editingId) {
        await axios.put(
          `${import.meta.env.VITE_API_URL}/api/testimonials/${editingId}`,
          formData,
          config
        );

        alert("Testimonial updated successfully");
      } else {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/api/testimonials`,
          formData,
          config
        );

        alert("Testimonial added successfully");
      }

      setFormData({
        name: "",
        company: "",
        content: "",
        rating: 5,
      });

      setEditingId(null);

      fetchTestimonials();
    } catch (error) {
      console.error(error);
      alert("Operation failed");
    }
  };

  const editTestimonial = (testimonial) => {
    setEditingId(testimonial._id);

    setFormData({
      name: testimonial.name,
      company: testimonial.company || "",
      content: testimonial.content,
      rating: testimonial.rating || 5,
    });
  };

  const deleteTestimonial = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this testimonial?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/testimonials/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Testimonial deleted successfully");

      fetchTestimonials();
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  };

  return (
    <DashboardLayout>

      <div>

        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Testimonials Management
        </h1>

        <p className="text-gray-500 mb-8">
          Manage all testimonials displayed on the website.
        </p>

        {/* Form */}

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">

          <h2 className="text-xl font-semibold mb-4">
            {editingId
              ? "Edit Testimonial"
              : "Add Testimonial"}
          </h2>

          <form
            onSubmit={submitHandler}
            className="grid md:grid-cols-2 gap-4"
          >

            <input
              type="text"
              placeholder="Client Name"
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
              placeholder="Company"
              value={formData.company}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  company: e.target.value,
                })
              }
              className="border p-3 rounded-lg"
            />

            <textarea
              placeholder="Testimonial Content"
              value={formData.content}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  content: e.target.value,
                })
              }
              rows="4"
              className="border p-3 rounded-lg md:col-span-2"
              required
            />

            <select
              value={formData.rating}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  rating: Number(e.target.value),
                })
              }
              className="border p-3 rounded-lg"
            >
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg"
            >
              {editingId
                ? "Update Testimonial"
                : "Add Testimonial"}
            </button>

          </form>

        </div>

        {/* Table */}

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <div className="p-5 border-b">
            <h2 className="text-xl font-semibold">
              Testimonials
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
                    Company
                  </th>

                  <th className="p-4 text-left">
                    Content
                  </th>

                  <th className="p-4 text-left">
                    Rating
                  </th>

                  <th className="p-4 text-left">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {testimonials.map((item) => (

                  <tr
                    key={item._id}
                    className="border-t"
                  >

                    <td className="p-4">
                      {item.name}
                    </td>

                    <td className="p-4">
                      {item.company}
                    </td>

                    <td className="p-4 max-w-md">
                      {item.content}
                    </td>

                    <td className="p-4">
                      ⭐ {item.rating}
                    </td>

                    <td className="p-4">

                      <div className="flex gap-2">

                        <button
                          onClick={() =>
                            editTestimonial(item)
                          }
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            deleteTestimonial(item._id)
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

export default Testimonials;