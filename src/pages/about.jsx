import Link from "next/link";



 export default function About() {



return (
    <div className="flex-col w-full min-h-screen flexMid">
    <h1 className="text-4xl font-bold">Page About !</h1>
    <br />
    <Link href="/">Retour Accueil</Link>
  </div>

  );

}