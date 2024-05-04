import TrailCard from './TrailCard';


function TrailList({trails}) {


return (
  <div className="all-trails">
    {trails.length > 0 ? trails.map((trail) => {
      return (
        <div key={trail.id}>
          <TrailCard key={trail.id} trail={trail} />
        </div>
      )
    }): null }
  </div>

)

}

export default TrailList;