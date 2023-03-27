import products from "./products.json";
export function getAll() {
    return Promise.resolve(products);
}
export function getById(id) {
    const product =products.find(item=>item.id===id);
    return Promise.resolve(product);
}
export default {getAll,getById}