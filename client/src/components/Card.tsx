import { Button } from './'
import Image from 'next/image'
import { ICard } from 'interfaces'
import { limitStringLength } from 'utils/limitStringLength'

type Props = {
  card: ICard
  artist?: boolean
}

const Card = ({
  card: { image, title, description, director, producer },
  artist
}: Props) => {
  return (
    <>
      {artist ? (
        <div
          className="artist-card"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="flex flex-col gap-2 items-center">
            <p className="text-white text-sm">{title}</p>
            <Button>See More</Button>
          </div>
        </div>
      ) : (
        <div className="bg-white flex flex-col shadow-xl drop-shadow-xl rounded-xl overflow-hidden cursor-pointer">
          <div className="relative w-full h-[250px] ">
            <Image
              src={image}
              fill
              alt="Move picture"
              quality={100}
              unoptimized={true}
              priority
            />
          </div>

          <div className="p-2">
            <p className="font-semibold pb-2 underline text-gray-600">
              {title}
            </p>
            <div className="text-start pl-3 flex flex-col gap-2">
              <p className="font-medium text-sm" title={description}>
                {description && description.length >= 300
                  ? limitStringLength(description, 300)
                  : description}
              </p>
              <p className="">
                Director:{' '}
                <span className="text-gray-500 text-sm">{director}</span>
              </p>
              <p className="">
                Producer:{' '}
                <span className="text-gray-500 text-sm">{producer}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Card
