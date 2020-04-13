import axios from 'axios';
import httpClient from '@/services/common/http-client/http-client.js';

// Mock module with Jest mock functions
jest.mock('@/services/common/http-client/http-client.js');

describe('In apiClient', () => {
  const baseURL = 'https://www.themealdb.com/api/json/v1/1';

  it('apiClient to be defined', () => {
    expect(httpClient).toBeDefined();
  });

  it('axios.create sets the baseUrl', () => {
    const expected = axios.create({
      baseURL,
    });
    expect(httpClient.baseURL).toEqual(expected.baseURL);
  });
});
