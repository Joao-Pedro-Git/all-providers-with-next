import { createAuthClient } from "better-auth/client";
const authClient = createAuthClient();
export const { signIn, signOut, signUp, useSession } = authClient;
