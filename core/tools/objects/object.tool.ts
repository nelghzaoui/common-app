export function removeEmptyProperties<T>(object: T): T {
  // remove the object properties which are empty
  for (const prop in object) {
    if (!object[prop]) delete object[prop];
  }

  return object;
}
