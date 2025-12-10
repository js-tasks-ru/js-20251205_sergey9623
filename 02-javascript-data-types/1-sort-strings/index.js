/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  function cmpr_asc(a,b)  { return a.localeCompare(b , ["ru", "en"], {caseFirst : "upper"}) }
  function cmpr_desc(a,b) { return b.localeCompare(a , ["ru", "en"], {caseFirst : "upper"}) }
  const sortFunc = (param == 'asc') ? cmpr_asc : cmpr_desc
  return arr.map((x) => x).sort(sortFunc)
}
