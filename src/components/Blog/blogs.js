import blogs from "./blogs.json";
export function getAll() {
    return Promise.resolve(blogs);
}
export function getById(id) {
    const blog =blogs.find(item=>item.id===id);
    return Promise.resolve(blog);
}
export default {getAll,getById}