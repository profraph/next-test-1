export default async function Page({ params }) {
  const { produits } = await params;
  console.log(produits);

  return (
    <div>
      <h1>Ma liste de courses</h1>
      <ul>
        {produits.map((prod, index) => (
          <li key={index} className="bg-gray-300 rounded-2xl p-2 m-2">{prod}</li>
        ))}
      </ul>
    </div>
  );
}
