import { getType } from '@/lib/pokemon'
import { ORDER } from '@/types'
import TypeInsightsClient from '@/components/client/pokemon-detail/TypeInsightsClient'

export default async function TypeInsightsPanel() {
  const types = await Promise.all(ORDER.map(async (t) => getType(t)))

  const rows = types.map((t) => {
    const count = t.pokemon.length
    const strong = t.damage_relations.double_damage_to.map((x) => x.name)
    const weak = t.damage_relations.double_damage_from.map((x) => x.name)
    return { name: t.name, count, strong, weak }
  })

  rows.sort((a, b) => b.count - a.count)

  return <TypeInsightsClient rows={rows} />
}
