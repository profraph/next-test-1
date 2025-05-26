export default function Utilisateurs() {
  return (
    <div className="bg-blue-300 m-4 p-4 rounded-2xl">
      <h1 className="text-2xl">Projet Next.JS !</h1>
      <p>Super ça marche !</p>
      <a href="/utilisateurs">
        <button className="bg-blue-400 m-2 p-2 rounded-2xl border border-amber-100 border-2">
          Liste des utilisateurs
        </button>
      </a>
    </div>
  );
}
