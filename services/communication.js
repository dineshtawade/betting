import api from "@/lib/axios";

/* ==========================
   BLOG APIs
========================== */

export const getBlogs = async () => {
  const response = await api.get("/blogs");
  return response.data;
};

export const getBlog = async (id) => {
  const response = await api.get(`/blogs/${id}`);
  return response.data;
};

export const createBlog = async (data) => {
  const response = await api.post("/blogs", data);
  return response.data;
};

export const updateBlog = async ({ id, data }) => {
  const response = await api.put(`/blogs/${id}`, data);
  return response.data;
};

export const deleteBlog = async (id) => {
  const response = await api.delete(`/blogs/${id}`);
  return response.data;
};

/* ==========================
   CATEGORY APIs
========================== */

export const getCategories = async () => {
  const response = await api.get("/categories");
  return response.data;
};

export const getCategory = async (id) => {
  const response = await api.get(`/categories/${id}`);
  return response.data;
};

export const createCategory = async (data) => {
  const response = await api.post("/categories", data);
  return response.data;
};

export const updateCategory = async ({ id, data }) => {
  const response = await api.put(`/categories/${id}`, data);
  return response.data;
};

export const deleteCategory = async (id) => {
  const response = await api.delete(`/categories/${id}`);
  return response.data;
};

/* ==========================
   USER APIs
========================== */

export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const getUser = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const updateUser = async ({ id, data }) => {
  const response = await api.put(`/users/${id}`, data);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};