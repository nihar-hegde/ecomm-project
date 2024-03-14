import SignInButton from "@/components/SignInButton";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <main className="flex items-center justify-center p-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-semibold">Hello World</h1>
        {session ? <p>{JSON.stringify(session)}</p> : <SignInButton />}
      </div>
    </main>
  );
}
