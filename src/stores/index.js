import { createPinia } from "pinia";
/* 导出所有的store */
export * from "./modules/city";
export * from "./modules/home";
export * from "./modules/main";
export * from "./modules/detail";
export * from "./modules/favor";

/* 创建pinia -> 然后挂载到vue实例上 */
const pinia = createPinia();

export default pinia;
