import Button from './Button/Button'

interface TabsSection {
  active: string,
  onChange: (value:string) => void
}

export default function TabsSection({ active, onChange }: TabsSection) {
  return (
    <section style={{ marginBottom: '1rem' }}>
      <Button isActive={active === 'main'} onClick={() => onChange('main')}>
        Main
      </Button>
      <Button
        isActive={active === 'feedback'}
        onClick={() => onChange('feedback')}
      >
        Feedback
      </Button>
      <Button isActive={active === 'effect'} onClick={() => onChange('effect')}>
        Effect
      </Button>
      <Button isActive={active === 'information'} onClick={() => onChange('information')}>
        Information
      </Button>
    </section>
  )
}
