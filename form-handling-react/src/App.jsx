import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        User Registration Demo
      </h1>
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
