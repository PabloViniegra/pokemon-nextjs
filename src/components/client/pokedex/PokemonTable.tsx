import Link from 'next/link'

export default function PokemonTable({ rows }: { rows: { name: string }[] }) {
  return (
    <div className='overflow-x-auto rounded-lg border border-default-200'>
      <table className='min-w-full text-sm'>
        <thead className='bg-default-100'>
          <tr>
            <th className='px-4 py-2 text-left'>Nombre</th>
            <th className='px-4 py-2 text-left'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className='odd:bg-default-50'>
              <td className='px-4 py-2 capitalize'>{r.name}</td>
              <td className='px-4 py-2'>
                <Link className='underline' href={`/pokemon/${r.name}`}>
                  Ver detalle
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
