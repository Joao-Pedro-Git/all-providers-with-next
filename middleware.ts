import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./src/app/lib/auth";

// Função que roda antes de abrir a página
export async function middleware(req: NextRequest) {
  const session = await auth.api.getSession(req); //verifica se tem sessão usuario

  if (!session?.user) {
    // se não estiver logado, redireciona pro login
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // se estiver logado, segue o fluxo normal
  return NextResponse.next();
}

// Aplica o middleware nessas rotas e em qualquer subrota com *
export const config = {
  matcher: ["/dashboard:path*"],
};
