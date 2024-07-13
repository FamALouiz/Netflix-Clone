"use client";

export default function AuthPage() {
  const handleSignIn = () => {
    console.log("Sign In");
  };
  const handleUseSignInCode = () => {
    console.log("Use Sign In Code");
  };
  const handleForgottenPassword = () => {
    console.log("Forgotten Password");
  };

  return (
    <div className="h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full bg-opacity-50">
        <nav className="px-10 py-5">
          <img src="/images/logo.png" alt="logo" className="h-10" />
        </nav>
        <div className="bg-black bg-opacity-75 w-1/2 h-5/6 mx-auto flex flex-col justify-start">
          <div className="px-10 py-7">
            <h4 className="text-white text-3xl font-sans">
              <b>Sign In</b>
            </h4>
          </div>
          <div className="flex justify-center py-2">
            <input
              type="text"
              placeholder="   Email or mobile number"
              className="rounded-sm h-12 w-4/5 font-sans bg-zinc-900 text-white border-2"
            />
          </div>
          <div className="flex justify-center py-2">
            <input
              type="text"
              placeholder="   Password"
              className="rounded-sm h-12 w-4/5 font-sans bg-zinc-900 text-white border-2"
            />
          </div>
          <div className="flex justify-center py-2">
            <button
              className="bg-red-600 text-white w-4/5 h-12 rounded-lg font-sans"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
          <div className="flex justify-center">
            <p className="text-zinc-400">OR</p>
          </div>
          <div className="flex justify-center py-2">
            <button
              className="bg-zinc-800 text-white w-4/5 h-12 rounded-lg font-sans"
              onClick={handleUseSignInCode}
            >
              Use a Sign-In Code
            </button>
          </div>
          <div className="flex justify-center py-2">
            <p
              className="text-white"
              onClick={handleForgottenPassword}
              style={{
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
