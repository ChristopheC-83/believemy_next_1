import Link from "next/link";

export default function project_2() {
  return (
    <div className="flex-col w-full min-h-screen flexMid">
      <h1 className="text-4xl font-bold">Page projet 2</h1>
      <br />
      <Link href="/">Retour Accueil</Link>
      <Link href="/projects/projects_home">Retour Accueil des projets</Link>
    </div>
  );
}
