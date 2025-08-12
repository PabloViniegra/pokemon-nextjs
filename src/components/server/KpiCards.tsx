import StatCard from '@/components/client/home/StatCard'
import { getKpis } from '@/lib/pokemon'

export default async function KpiCards() {
  const kpis = await getKpis()
  return (
    <section className='space-y-4 w-1/2 my-12'>
      <h2 className='text-xl font-medium text-foreground font-sans mb-7'>
        Estadísticas Principales
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <StatCard label='Total de Especies' value={kpis.species} />
        <StatCard label='Habilidades Únicas' value={kpis.abilities} />
        <StatCard label='Ítems Disponibles' value={kpis.items} />
      </div>
    </section>
  )
}
