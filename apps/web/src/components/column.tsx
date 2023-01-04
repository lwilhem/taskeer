type ColumnProps = {
  name: string
}

export default function StepColumn({ name }: ColumnProps) {
  return (
    <section>
      <h1>{name}</h1>
    </section>
  )
}
