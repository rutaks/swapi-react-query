import { API_BASE_URL } from "../utils/constants";

export const fetchPlanets = async (_, page) => {
  const res = await fetch(`${API_BASE_URL}/planets?page=${page}`);
  return res.json();
};

export const fetchPeople = async () => {
  const res = await fetch(`${API_BASE_URL}/people`);
  return res.json();
};
