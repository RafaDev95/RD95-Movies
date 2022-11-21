import { Card } from './'
import { ICard } from 'interfaces'

type Props = {
  cards: ICard[]
  artist?: boolean
}

const CardList = ({ cards, artist }: Props) => {
  return (
    <div
      className={
        artist
          ? 'grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-10'
          : 'grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:grap-4 bg-gray-100 p-3 rounded-lg'
      }
    >
      {cards?.map((card, i) => (
        <Card key={i} artist={artist} card={card} />
      ))}
    </div>
  )
}
export default CardList
