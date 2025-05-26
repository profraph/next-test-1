export async function GET() {
  const data = {
    prenom: "Raphael",
    nom: "Paris",
    email: "szjndiz",
    img: "hufzeub",
    id: 46,
  };
  return Response.json({ data });
}
