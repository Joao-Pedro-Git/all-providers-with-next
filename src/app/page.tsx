"use client";

import { signIn } from "./lib/auth-client";
import { Button } from "../components/ui/button";

async function loginGitHub() {
  await signIn.social({
    provider: "github",
    callbackURL: "/dashboard",
  });
}

async function loginGoogle() {
  await signIn.social({
    provider: "google",
    callbackURL: "/dashboard",
  });
}
export default function Home() {
  return (
    <div>
      <h1>Login com multiplas plataformas</h1>
      <br />
      <Button className="cursor-pointer" onClick={loginGitHub}>
        GitHub
      </Button>
      <br />
      <br />
      <Button className="cursor-pointer" onClick={loginGoogle}>
        Google
      </Button>
    </div>
  );
}
