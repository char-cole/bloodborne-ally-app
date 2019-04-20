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

export function toggleChalice(toggle) {
  if (toggle) {
      return {
      type: "TRUE_TO_FALSE"
    }
  }
  else return {
    type: "FALSE_TO_TRUE"
  }
}