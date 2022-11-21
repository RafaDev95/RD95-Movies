import { CardList } from '.'

const mockData = [
  {
    title: 'Dwayne Johnson',
    image: '/images/static/dwayne.jpg'
  },
  {
    title: 'Mark Wahlberg',
    image: '/images/static/mark.jpg'
  },
  {
    title: 'Laurence Fishburne',
    image: '/images/static/laurence.jpg'
  },
  {
    title: 'Robert Downey Jr.',
    image: '/images/static/robert.jpg'
  },
  { title: 'Clint Eastwood', image: '/images/static/clint.jpg' }
]

const ArtistsSection = () => {
  return (
    <div className="w-full mt-10">
      <h1 className="section-title">Most Voted Artists</h1>
      <CardList cards={mockData} artist />
    </div>
  )
}
export default ArtistsSection
