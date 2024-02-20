import Link from "next/link";

export default function project_1() {
  return (
    <div className="flex-col w-full min-h-screen flexMid">
      <h1 className="text-4xl font-bold">Page Accueil du projet 1</h1>
      <br />
      <Link href="/">Retour Accueil</Link>
      <Link href="/projects/projects_home">Retour Accueil des projets</Link>
      <br />
      
      <Link href="/projects/projet_1/intro">Introduction projet 1</Link>
      <Link href="/projects/projet_1/contenu">Contenu projet 1</Link>
    </div>
  );
}
