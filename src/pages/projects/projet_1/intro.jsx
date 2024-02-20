import Link from "next/link";

export default function intro() {
  return (
    <div className="flex-col w-full min-h-screen flexMid">
      <h1 className="text-4xl font-bold">Introduction projet 1</h1>
      <br />
      <Link href="/">Retour Accueil</Link>
      <Link href="/projects/project_1">Retour Accueil des projets</Link>
    </div>
  );
}
