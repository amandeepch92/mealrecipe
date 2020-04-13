import httpClient from "@/services/common/http-client/http-client.js";

const getRandomMealRecipe = () => {
    return httpClient.get('/random.php').then(res => res.data);
};
const getAllMealsByInitial = (mealInitial) =>{
    return httpClient.get(`/search.php?f=${mealInitial}`).then(res => res.data);
}

const getAllMealsCategories = () =>{
    return httpClient.get(`/categories.php`).then(res => res.data);
}
const getCategoryDetails = (categoryName) =>{
    return httpClient.get(`filter.php?c=${categoryName}`).then(res => res.data);
}
const getMealByName = (mealName) =>{
    return httpClient.get(`search.php?s=${mealName}`).then(res => res.data);
}
export {getRandomMealRecipe,getAllMealsByInitial,getAllMealsCategories,getCategoryDetails,getMealByName};   