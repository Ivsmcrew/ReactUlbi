export const quantityOfPages = function(totalCount, pageLimit) {
  return Math.ceil(totalCount / pageLimit)
}

export const getPagesArray = function(totalPages) {
  let pagesArray = [];
  for (let i = 0; i < totalPages; i++) {
    pagesArray.push(i + 1)
  }
  return pagesArray
}