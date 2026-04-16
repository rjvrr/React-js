const ResCard = ({cloudinaryImageId , name , rating , cuisine}) => {
  return (
    <div className="res-card">
      <img className="card-img" src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}/>
      <div className="card-body">
        <h3>{name}</h3>
        <h3>⭐ {rating}</h3>
        <h3>{cuisine}</h3>
      </div>
    </div>
  )
}

export default ResCard;

//A card that will display info for reach restaurant using props