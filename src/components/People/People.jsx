import React from "react";
import { useQuery } from "react-query";
import { USE_QUERY_KEY, USE_QUERY_STATUS } from "../../utils/enums";
import { PeopleList } from "./components";
import { fetchPeople } from "../../services/apiServices";

const Planets = () => {
  const { data, status } = useQuery(USE_QUERY_KEY.PEOPLE, fetchPeople);
  return (
    <div>
      <h2>People</h2>
      <div>useQuery Status Response:</div>
      {status === USE_QUERY_STATUS.LOADING && <div>Loading...</div>}
      {status === USE_QUERY_STATUS.ERROR && (
        <div>Oups could not connect...</div>
      )}
      {status === USE_QUERY_STATUS.SUCCESS && (
        <PeopleList people={data.results} />
      )}
    </div>
  );
};

export default Planets;
