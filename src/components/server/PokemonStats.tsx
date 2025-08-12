export default async function PokemonStats({ data }: { data: any }) {
  return (
    <section>
      <h2 className='text-xl font-semibold mb-2'>Stats</h2>
      <ul className='grid sm:grid-cols-3 gap-2'>
        {data.stats.map((s: any) => (
          <li
            key={s.stat.name}
            className='bg-default-100 rounded p-3 flex justify-between'
          >
            <span className='capitalize'>{s.stat.name}</span>
            <span className='font-semibold'>{s.base_stat}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
