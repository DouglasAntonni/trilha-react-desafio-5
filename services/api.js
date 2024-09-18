import axios from 'axios';
import { api } from '../services/api';

export const api  = axios.create({
    baseURL: 'https://nuareafrukmnjnaakplk.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51YXJlYWZydWttbmpuYWFrcGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAyMjc0MjEsImV4cCI6MTk3NTgwMzQyMX0.3qUEldVsmcr_yrpf8N1-qBGdHLB1QCy9nB6-nApVQIA",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51YXJlYWZydWttbmpuYWFrcGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAyMjc0MjEsImV4cCI6MTk3NTgwMzQyMX0.3qUEldVsmcr_yrpf8N1-qBGdHLB1QCy9nB6-nApVQIA"
    }
})


export const getPosts = async () => {
    const { data } = await api.get('/posts'); 

    if (data) {
        return data;
    }

    return [];
}

export const getPostBySlug = async (id) => {
    try {
        const { data } = await api.get(`/posts/${id}`);
        if (data) {
            return data;
        }
    } catch (error) {
        console.error('Error fetching post by slug:', error);
    }
    return null;
}