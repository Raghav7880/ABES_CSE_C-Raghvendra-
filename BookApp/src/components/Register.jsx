import React from "react";
import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      category: "",
      checkbox: [],
      radio: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Register Data:", data);
    alert(`Registered: ${data.firstName} ${data.lastName}`);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Register</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName", { required: true })}
          placeholder="First name"
          className="form-control mb-2"
        />

        <input
          {...register("lastName", { minLength: 2 })}
          placeholder="Last name"
          className="form-control mb-2"
        />

        <select {...register("category")} className="form-select mb-2">
          <option value="">Select...</option>
          <option value="A">Post-Graduate</option>
          <option value="B">Under-Graduate</option>
        </select>

        <label className="me-2">
          <input {...register("checkbox")} type="checkbox" value="A" /> A
        </label>
        <label className="me-2">
          <input {...register("checkbox")} type="checkbox" value="B" /> B
        </label>
        <label>
          <input {...register("checkbox")} type="checkbox" value="C" /> C
        </label>

        <div className="mt-3">Gender
          <label className="me-2">
            <input {...register("radio")} type="radio" value="A" /> Male
          </label>
          <label className="me-2">
            <input {...register("radio")} type="radio" value="B" /> Female
          </label>
          <label>
            <input {...register("radio")} type="radio" value="C" /> Other
          </label>
        </div>

        <button type="submit" className="btn btn-success mt-3 w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
