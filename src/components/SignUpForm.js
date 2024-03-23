import { Link } from "react-router-dom";
// import { useUserContext } from "../../hooks/useUserContext";
import { useRef } from "react";

const SignUpForm = () => {
  // const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  // const {
  //   user,
  //   loading,
  //   signInUser,
  //   forgotPassword,
  //   signInWithGoogle,
  //   signInWithGithub,
  // } = useUserContext();

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   // const formData = new FormData(e.target);
  //   const email = emailRef.current.value;
  //   const password = passwordRef.current.value;

  //   // console.log({ email, password });
  //   if (email && password) signInUser(email, password);
  // };

  // useEffect(() => {
  //   if (user) {
  //     navigate("/dashboard");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user]);

  // const forgotPasswordHandler = () => {
  //   const email = emailRef.current.value;
  //   if (!email) {
  //     toast.error("Please Enter Your Email in Email Field first!");
  //   } else {
  //     toast.error("Please Check Your Mail Inbox to reset your password");
  //     forgotPassword(email).then(() => (emailRef.current.value = ""));
  //   }
  // };

  return (
    <div className="primary-bg w-screen h-screen flex justify-center items-center">
      <div className="signup-container text-center">
        <h1 className="text-6xl leading-snug text-zinc-300">
          Sign in to <span className="block">BULLETBOARD</span>
        </h1>
        <form onSubmit={() => {}} className="form-ctrl flex flex-col gap-10">
          <label htmlFor="email" className="mt-5">
            <input
              type="text"
              name="email"
              id="email"
              ref={emailRef}
              placeholder="Email"
              autoComplete="off"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              id="password"
              ref={passwordRef}
              placeholder="Password"
              autoComplete="off"
            />
          </label>
          <button type="submit" className="p-2  bg-yellow-300">
            Sign in
          </button>
          <div className="flex justify-center items-center gap-5">
            <button
              type="submit"
              className="p-2 w-3/5 m-auto bg-yellow-300"
              // onClick={signInWithGoogle}
            >
              Sign in with Google
            </button>
            <button
              type="submit"
              className="p-2 w-3/5 m-auto bg-stone-500"
              // onClick={signInWithGithub}
            >
              Sign in with Github
            </button>
          </div>
          <div className="flex justify-center items-center gap-10">
            <a onClick={() => {}} className="btn">
              Forgot Password
            </a>
            <Link to="/register" className="btn">
              New User? Click here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
