import axios from "axios";
import "dotenv/config";

async function Personne() {
  const url = `${process.env.BASE_URL}/api/test`;
  const res = await axios.get(url);

  console.log(res.data);
  const text = JSON.stringify(res.data);

  if (text) {
    return <div>{text}</div>;
  } else {
    return <div>Erreur dans Personne</div>;
  }
}

export const dynamic = "force-dynamic";

export default Personne;
