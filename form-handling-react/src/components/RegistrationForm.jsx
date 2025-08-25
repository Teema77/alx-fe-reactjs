import { useState } from "react";

const RegistrationForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Basic validation
  const validate = () => {
    let newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      // Mock API request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccessMessage("User registered successfully!");
      setFormData({ username: "", email: "", password: "" });
    } catch (error) {
      setSuccessMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Register (Controlled)</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}
        <div>
          <label className="block font-medium">Username</label>
          <input
            type="text"
            name="username"
            className="w-full p-2 border rounded"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium">Password</label>
          <input
            type="password"
            name="password"
            className="w-full p-2 border rounded"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>

      {successMessage && (
        <p className="mt-4 text-green-600">{successMessage}</p>
      )}
    </div>
  );
};

export default RegistrationForm;
