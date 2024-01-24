'use client' 

import { SignIn as ClerkSignIn } from "@clerk/nextjs";

const SignIn = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-600">
      <ClerkSignIn afterSignInUrl='/'/>
    </div>
  );
};

export default SignIn;
