// Import intercepted by Jest to return mock getAllEmployees function
import { getRandomMealRecipe, getAllMealsByInitial, getAllMealsCategories,getCategoryDetails,getMealByName } from '@/services/meal-recipes/meal-recipes.js';
import httpClient from '@/services/common/http-client/http-client.js';

// Mock module with Jest mock functions
jest.mock('@/services/common/http-client/http-client.js');

describe('In Employee service, ', () => {
  it('getRandomMealRecipe api should call', () => {
    const randomMeals = [1, 2, 3];
    httpClient.get.mockResolvedValue(randomMeals);
    getRandomMealRecipe().then((result) => {
      expect(result).toEqual(randomMeals);
    });
  });

  it('getAllMealsByInitial api should call', () => {
    const initialMeal = 'a';
    httpClient.get.mockResolvedValue(initialMeal);
    getAllMealsByInitial().then((result) => {
      expect(result).toEqual(initialMeal);
    });
  });

  it('getAllMealsCategories api should call', () => {
    const mealCategories = [1, 2, 3];
    httpClient.get.mockResolvedValue(mealCategories);
    getAllMealsCategories().then((result) => {
      expect(result).toEqual(mealCategories);
    });
  });
  it('getCategoryDetails api should call', () => {
    const categoryDetails = [1, 2, 3];
    httpClient.get.mockResolvedValue(categoryDetails);
    getCategoryDetails().then((result) => {
      expect(result).toEqual(categoryDetails);
    });
  });
  it('getMealByName api should call', () => {
    const mealDetails = [1, 2, 3];
    httpClient.get.mockResolvedValue(mealDetails);
    getMealByName().then((result) => {
      expect(result).toEqual(mealDetails);
    });
  });
});
