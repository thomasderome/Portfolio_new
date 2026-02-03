export default function about_me() {
  const birthDate = new Date('09/02/2007');
  const now = new Date();
  let age = now.getFullYear() - birthDate.getFullYear();

  if (
    now.getMonth() < birthDate.getMonth() ||
    (now.getMonth() == birthDate.getMonth() && now.getDate() < birthDate.getDate())
  )
    age--;

  return (
    <pre className={'text-base'}>
      {`╔═══════════════════════════════════════════╗
║ > NAME         : Thomas                   ║
║ > AGES         : ${age} ans                   ║
║ > LOCALISATION : Nice, France             ║
║ > STATUS       : Student @ Epitech Nice   ║
║ > PASSION      : Programming, video game  ║
║                  skiing, bike             ║
╚═══════════════════════════════════════════╝`}
  </pre>
)
}