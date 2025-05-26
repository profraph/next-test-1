export default function Test() {
  return (
    <div className="bg-blue-300 m-4 p-4 rounded-2xl">
      <h1 className="text-2xl">Ceci est ma page</h1>
      <a href="/utilisateurs">
        <button className="bg-blue-400 m-2 p-2 rounded-2xl border border-amber-100 border-2">
          Page Enfant 1
        </button>
      </a>
    </div>
  );
}
