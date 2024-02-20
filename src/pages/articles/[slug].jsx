/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { useRouter } from "next/router"; //pas next/navigation !!!

// on doit récupérer le slug dans le contexte

export default function Article() {
  const router = useRouter();

  const {slug} = router.query 
  console.log(slug);
  
  return (
    <div className="flex-col w-full min-h-screen flexMid">
      <h1 className="text-4xl font-bold">Article {slug}</h1>
      <br />
      <Link href="/">Page d'accueil</Link>
    </div>
  );
}
