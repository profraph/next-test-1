"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function Bonjour() {
  const [prenom, setPrenom] = useState("");
  const router = useRouter();

  return (
    <div className="flex flex-col align-middle items-center m-4 p-4 bg-amber-100 shadow-2xl rounded-2xl">
      <h1 className="text-4xl">Entrez un prénom</h1>
      <input
        onChange={(e) => {
          setPrenom(e.target.value);
        }}
        className="m-2 border border-black"
      ></input>
      <button type="button" onClick={() => router.push("/bonjour/" + prenom)}>
        Dire bonjour
      </button>
    </div>
  );
}

export default Bonjour;
