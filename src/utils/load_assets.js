/* vite本地资源路径拼接 */
export function getAssetURL(image) {
  // import.meta.url 获取当前文件所在的路径
  return new URL(`../assets${image}`, import.meta.url);
}
