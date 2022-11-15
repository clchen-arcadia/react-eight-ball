

/**
 *  Function accepts an array of items,
 *  Function randomly selects an item and returns it.
 */

function randomSelect(items) {
  const randomIdx = Math.floor(Math.random() * items.length);
  return items[randomIdx];
}

export { randomSelect };
