import { Link } from "react-router-dom";
import { useStateContext } from "../hooks/useStateContext";

const RegistrationFrm = () => {
  const { registerUser, loading } = useStateContext();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const name = formData.get("name");
    const password = formData.get("password");

    // console.log({ email, name, password });
    if (email && name && password) registerUser(email, name, password);
  };
  return (
    <div className="primary-bg w-screen h-screen flex justify-center items-center ">
      <div className="signup-container text-center">
        <h1 className="text-6xl leading-snug text-zinc-300">
          Sign Up to <span className="block">BULLETBOARD</span>
        </h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-10 form-ctrl">
          <label htmlFor="email" className="mt-5">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
            />
          </label>
          <label htmlFor="name">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="off"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="off"
            />
          </label>
          <button type="submit" className="p-2 w-2/5 m-auto bg-yellow-300">
            {loading ? "Loading..." : "Register"}
          </button>
          <Link to="/" className="btn">
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegistrationFrm;
