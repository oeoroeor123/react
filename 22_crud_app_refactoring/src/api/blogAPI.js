import axios from 'axios';

const API_HOST = 'http://localhost:8080';
const REQUEST_URL = `${API_HOST}/blogs`;

export const getBlogList = async (parameters) => {
  const response = await axios.get(`${REQUEST_URL}`, {
    params: parameters,
  });
  return response.data;
}

export const getBlog = async (id) => {
  const response = await axios.get(`${REQUEST_URL}/${id}`);
  return response.data;
}

export const registBlog = async (blog) => {
  const response = await axios.post(`${REQUEST_URL}`, blog);
  return response.data;
}

export const modifyBlog = async (blog) => {
  const response = await axios.put(`${REQUEST_URL}/${blog.id}`, blog);
  return response.data;
}

export const deleteBlog = async (id) => {
  const response = await axios.delete(`${REQUEST_URL}/${id}`);
  return response.data;
}