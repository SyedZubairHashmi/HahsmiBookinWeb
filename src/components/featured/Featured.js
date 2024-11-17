import "./featured.css"

function Featured() {
  return (
    <div className="featured">
        <div className="featuredItem">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT__DHjxdr6U9XE7xIP390CzJi2dl0IplASg&s" alt=""  className="featuredImg"/>
             <div className="featuredTitles">
                  <h1>Frankfurta</h1>
                  <h2>123 properties</h2>
             </div>
        </div>
        <div className="featuredItem">
             <img src="https://www.agoda.com/wp-content/uploads/2024/07/dubai-night-featured-1244x700.jpg" alt=""  className="featuredImg"/>
             <div className="featuredTitles">
                  <h1>Dubai</h1>
                  <h2>123 properties</h2>
             </div>
        </div>
        <div className="featuredItem">
             <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/408000/408680-Newcastle-City-Center.jpg" alt=""  className="featuredImg"/>
             <div className="featuredTitles">
                  <h1>Newcastle</h1>
                  <h2>123 properties</h2>
             </div>
        </div>


    </div>
  )
}

export default Featured