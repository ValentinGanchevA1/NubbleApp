import {PageAPI, api} from '@api';

import {UserAPI} from './userTypes';

const PATH = 'users';

const getById = async (userId: string): Promise<UserAPI> => {
  const response = await api.get<UserAPI>(`${PATH}/${userId}`);
  return response.data;
};

const getList = async (search: string): Promise<PageAPI<UserAPI>> => {
  const response = await api.get<PageAPI<UserAPI>>(`${PATH}`, {
    params: {search},
  });
  return response.data;
};

export const userApi = {
  getById,
  getList,
};
