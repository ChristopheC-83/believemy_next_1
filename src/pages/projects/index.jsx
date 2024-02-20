import Link from "next/link";

export default function projectsHome() {
  return (
    <div className="flex-col w-full min-h-screen flexMid">
      <h1 className="text-4xl font-bold">Page Accueil des projets</h1>
      <br />
      <Link href="/">Retour Accueil</Link>
      <Link href="/projects/project_1">Page projet 1</Link>
      <Link href="/projects/project_2">Page projet 2</Link>
    </div>
  );
}
