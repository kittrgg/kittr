/** Filter an array of objects for some unique value for a given property.
 *
 * @params
 *
 * arr: The array you want to filter.
 *
 * objectKey: The key on the element objects that you want to use for filtering.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getArrayUniques = (arr: any[], objectKey: string) => {
  return arr
    .map((elem) => elem[objectKey])
    .filter(
      (elem: string, index: number, self: string[]) =>
        self.indexOf(elem) === index,
    );
};
