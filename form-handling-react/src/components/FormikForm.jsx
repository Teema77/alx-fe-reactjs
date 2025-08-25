import { Formik, Form } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  // Validation Schema with Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Mock API call
  const handleSubmit = async (values, { resetForm, setSubmitting, setStatus }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus({ success: "User registered successfully!" });
      resetForm();
    } catch (error) {
      setStatus({ error: "Something went wrong. Try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Register (Formik + Yup)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className="space-y-4">
            {/* Username */}
            <div>
              <label className="block font-medium">Username</label>
              <input
                type="text"
                name="username"
                className="w-full p-2 border rounded"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username && (
                <p className="text-red-500 text-sm">{formik.errors.username}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border rounded"
                value={formik.values.email}   
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block font-medium">Password</label>
              <input
                type="password"
                name="password"
                className="w-full p-2 border rounded"
                value={formik.values.password} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm">{formik.errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              {formik.isSubmitting ? "Registering..." : "Register"}
            </button>

            {formik.status?.success && (
              <p className="mt-4 text-green-600">{formik.status.success}</p>
            )}
            {formik.status?.error && (
              <p className="mt-4 text-red-600">{formik.status.error}</p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
