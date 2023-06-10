import axios from "axios"

const categoriesApi = axios.create({
    baseURL: 'http://localhost:8080/api/categories'
})

export const getAllCategories = async() => {
    const res = await categoriesApi.get('')
    return res.data.data
}