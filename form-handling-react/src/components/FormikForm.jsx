import { Formik, Form, Field, ErrorMessage } from "formik";
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
        {({ isSubmitting, status }) => (
          <Form className="space-y-4">
            {/* Username */}
            <div>
              <label className="block font-medium">Username</label>
              <Field
                type="text"
                name="username"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="username"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block font-medium">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>

            {status?.success && (
              <p className="mt-4 text-green-600">{status.success}</p>
            )}
            {status?.error && (
              <p className="mt-4 text-red-600">{status.error}</p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
