import './searchitem.css'

function Searchitem() {
  return (
    <div className='searchItem'>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkv9gspjNJuPgwM1qvOeimwF_7DuL4ExswtDxL4GLDflpM5l9xNAmY4QGS-9ToMC2R91k&usqp=CAU' alt=''
          className='siImg'
         />
         <div className='siDesc'>
               <h1 className='siTitle'>Tower Street Apartments</h1>
               <span className='siDistance'>500m from center</span>
               <span className='siTaxiOp'>Free airport taxi</span>
               <span className='siSubtitle'>
                Studi Apartment with Air conditioning
                </span>
                <span className='siFeatures'>
                  Entire studio . 1 bathroom . 21m 1 full bed
                </span>
                <span className='siCancelOp'>Free cancellation</span>
                <span className='siCancelOpSubtitle'>You can cancel later, so lock in this great price today!</span>

         </div>
         <div className='siDetails'>
          <div className='siRating'>
              <span>Excellent</span>
              <button>8.9</button>
          </div>
          <div className='siDetaiTexts'>
              <span className='siPrice'>$123</span>
              <span className='siTaxOp'>Includes Taxes and fees</span>
               <button className='siCheckButton'>See availablity</button>
          </div>


         </div>

    </div>
  )
}

export default Searchitem