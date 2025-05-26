"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [produits, setProduits] = useState([]);
  const [text, setText] = useState("");
  const router = useRouter();

  function ajouterProduit(prod) {
    setProduits([...produits, prod]);
  }

  function rediriger() {
    let url = "/courses/";
    produits.forEach((prod) => {
      url = url + prod + "/";
    });
    router.push(url)
  }

  return (
    <div>
      <h1>Créer une liste</h1>
      <form>
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            ajouterProduit(text);
          }}
          type="submit"
        >
          Ajouter Produit
        </button>
      </form>
      <button onClick={rediriger}>Accéder à ma liste</button>
    </div>
  );
}
