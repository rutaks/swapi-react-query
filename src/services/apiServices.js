import { API_BASE_URL } from "../utils/constants";

export const fetchPlanets = async () => {
  const res = await fetch(`${API_BASE_URL}/planets`);
  return res.json();
};

export const fetchPeople = async () => {
  const res = await fetch(`${API_BASE_URL}/people`);
  return res.json();
};
