import Link from "next/link";

export default function Index() {

  console.log("Let's Go !!!");
  function appearText() {
    console.log("Hello Nextjs !");
  }
  return (
    <div className="flex-col w-full min-h-screen flexMid">
      <h1 className="text-4xl font-bold">Hello Nextjs !</h1>
      <br />
      <Link href="/about">Section About</Link>
      <Link href="/api/hello">Section json</Link>
      <button
        className="px-4 py-2 my-4 text-black rounded-lg bg-neutral-100 hover:bg-neutral-200"
        onClick={appearText}
      >
        Click me !
      </button>
      <Link href="/projects">Section projets</Link>
    </div>
  );
}
