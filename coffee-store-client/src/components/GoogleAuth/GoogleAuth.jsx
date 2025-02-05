import React from "react";
import Google from "../../assets/google.png";
import useAuth from "../../Hooks/useAuth";
const GoogleAuth = () => {
  const { user, GoogleSignInUser } = useAuth();
  const handleGoogleSignIn = async () => {
    try {
      const { data } = await GoogleSignInUser();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        type="button"
        className="btn w-full flex gap-2 bg-[#E3B577]"
      >
        <img className="w-10" src={Google} alt="" />
        Continue With Google
      </button>
    </div>
  );
};

export default GoogleAuth;
