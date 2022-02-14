export const updateObjectInArray = (
  items: any,
  itemId: any,
  objPropertyName: any,
  newObjProps: any,
): any => {
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  return items.map((u: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (u[objPropertyName] === itemId) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return { ...u, ...newObjProps };
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return u;
  });
};
