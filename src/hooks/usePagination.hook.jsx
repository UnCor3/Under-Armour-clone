const usePagination = (_initialData,page) => {
  const initialLength = _initialData.length
  const startIndex = page === 1 ? 0 : ((page - 1) * 8)
  const _finalData = _initialData.slice((1 * startIndex),page * 8)

  const prevPageDisabled = page == 1 ? true : false
  const nextPageDisabled = parseInt(_finalData.length / (page * 8)) >= 1 ? false : true

  const shownItemsStartIndex = page == 1 ? 1 : ((page - 1)  * 8) + 1
  const totalShownItemsIndex = ((page == 1 ? 0 : page - 1) * 8) + _finalData.length

  return {
    prevPageDisabled,
    nextPageDisabled,
    _finalData,
    shownItemsStartIndex,
    totalShownItemsIndex,
    initialLength 
  }

}


export default usePagination;