export function updateSearch(search) {
  return {
      type: "SEARCH_UPDATED",
      value: search
  }
}

export function updateResults(stuff) {
  return {
      type: "RESULTS_UPDATED",
      value: stuff
  }
}