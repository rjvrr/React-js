import { useEffect, useState } from "react";

export function ResCard() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.626514753487303&lng=77.43698358535767&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await res.json();
        const infos = (json?.data?.cards || [])
          .filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")
          .map(c => c.card.card.info);
        setRestaurants(infos);
        {console.log(infos)}
      } catch (e) {
        console.error(e);
        setRestaurants([]);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="res-con">
      {restaurants.map(r => (
        <div key={r.id}>
          <h3>{r.name}</h3>
          <p>{r.cuisines?.join(", ")}</p>
        </div>
      ))}
    </div>
    
  );
}