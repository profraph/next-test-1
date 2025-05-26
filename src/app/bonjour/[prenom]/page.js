export default async function Bonjour({params}) {
    const {prenom} = await params

  return (
    <div className="text-center text-4xl">
        Bonjour {prenom}
    </div>
  )
}