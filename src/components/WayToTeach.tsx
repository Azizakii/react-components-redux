interface WayToTeach {
  title: string,
  description: string
}

export default function WayToTeach({ title , description }: WayToTeach) {
  function handleClick() {
    localStorage.setItem('auth-time', new Date().toString())
  }

  return (
    <li onClick={handleClick}>
      <p>
        <strong>{title}</strong> {description}
      </p>
    </li>
  )
}
