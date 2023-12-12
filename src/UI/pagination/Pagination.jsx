import React from "react";

const Pagination = function({changePage, pagesArray, page}) {
  return(
    <div style={{margin: '20px', display: 'flex', justifyContent: 'center'}}>
      {pagesArray.map((numberOfPage) => {
        return (
          <span 
            onClick={() => {changePage(numberOfPage)}}
            key={numberOfPage} 
            className={(page === numberOfPage) ? 'myBtn myBtn__active' : 'myBtn'}
          >
            {numberOfPage}
          </span>
        )
      })}
    </div>
  )
}

export default Pagination