import axios from "axios";

async function Personne() {
  const res = await axios.get("http://localhost:3000/api/test");

  console.log(res.data)
  const text = JSON.stringify(res.data)

  return <div>{text}</div>;
}

export default Personne;
