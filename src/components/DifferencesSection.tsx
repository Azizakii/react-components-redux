import Button from './Button/Button'
import { useState } from 'react'
import { Differences, differences } from '../data'

export default function DifferencesSection() {
  type ContentType = keyof Differences

  const [contentType, setContentType] = useState<ContentType | null>(null)

  function handleClick(type: ContentType) {
    setContentType(type)
  }

  return (
    <section>
      <h3>Чем мы отличаемся от других</h3>

      <Button
        isActive={contentType === 'way'}
        onClick={() => handleClick('way')}
      >
        Подход
      </Button>
      <Button
        isActive={contentType === 'easy'}
        onClick={() => handleClick('easy')}
      >
        Доступность
      </Button>
      <Button
        isActive={contentType === 'program'}
        onClick={() => handleClick('program')}
      >
        Концентрация
      </Button>

      {!contentType && <p>Нажми на кнопку</p>}

      {contentType && <p>{differences[contentType]}</p>}
    </section>
  )
}
