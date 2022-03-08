export const updateObjectInArray = (
  items: string[],
  itemId: number,
  objPropertyName: string,
  newObjProps: boolean[],
): any => {
  return items.map((u: any) => {
    if (u[objPropertyName] === itemId) {
      return { ...u, ...newObjProps };
    }
    return u;
  });
};
