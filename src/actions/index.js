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
      type: "TRUE_TO_FALSE",
      value: toggle
    }
  }
  else {
    return {
      type: "FALSE_TO_TRUE",
      value: toggle
    }
  }
}

export function updateNothing(nothing) {
  return {
    type: "NOTHING_UPDATED",
    value: nothing
  }
}