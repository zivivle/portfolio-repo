export const removeItem = <T>([...arr]: T[], item: T) => {
  const index = arr.indexOf(item)
  if (index > -1) {
    arr.splice(index, 1)
  }
  return arr
}

export const closestItem = <T>(arr: T[], item: T) => {
  const index = arr.indexOf(item)
  if (index === -1) {
    return arr[0]
  } else if (index === arr.length - 1) {
    return arr[arr.length - 2]
  } else {
    return arr[index + 1]
  }
}
