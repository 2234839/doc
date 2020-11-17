/** 求两个数组的编辑距离 */
export function minDistance<T>(l1: T[], l2: T[], equal?: (i1: number, i2: number) => boolean): number {
  if (equal === undefined) {
    /** 比较对应位置的元素是否相等 */
    return minDistance(l1, l2, (i1, i2) => l1[i1] === l2[i2]);
  }
  const len1 = l1.length;
  const len2 = l2.length;

  let matrix = [] as any;

  for (let i = 0; i <= len1; i++) {
    // 构造二维数组
    matrix[i] = [];
    for (let j = 0; j <= len2; j++) {
      // 初始化
      if (i == 0) {
        matrix[i][j] = j;
      } else if (j == 0) {
        matrix[i][j] = i;
      } else {
        // 进行最小值分析
        let cost = 0;
        if (!equal(i - 1, j - 1)) {
          // 相同为0，不同置1
          cost = 1;
        }
        const temp = matrix[i - 1][j - 1] + cost;

        matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, temp);
      }
    }
  }
  return matrix[len1][len2]; //返回右下角的值
}
