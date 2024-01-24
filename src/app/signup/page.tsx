'use client' 

import { SignUp as ClerkSignUp } from "@clerk/nextjs";

const SignUp = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-600">
      <ClerkSignUp afterSignUpUrl="/" />
    </div>
  );
};

export default SignUp;
