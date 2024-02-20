/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { useRouter } from "next/router"; //pas next/navigation !!!

// on doit récupérer le slug dans le contexte

export default function TestSlug() {
  const router = useRouter();

  const { slug } = router.query;
  console.log(router.query);

  // Utilisation de la déstructuration avec valeurs par défaut pour éviter les erreurs
  const [slug1 = "", slug2 = "", slug3 = ""] = slug || [];

  return (
    <div className="flex-col w-full min-h-screen flexMid">
      <h1 className="text-4xl font-bold">
        Test Slug {slug1} {slug2 && "/ " + slug2} {slug3 && "/ " + slug3}
      </h1>
      <br />
      <Link href="/">Page d'accueil</Link>
    </div>
  );
}
