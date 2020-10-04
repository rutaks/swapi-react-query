import React, { Fragment } from "react";
import { usePaginatedQuery } from "react-query";
import { USE_QUERY_KEY, USE_QUERY_STATUS } from "../../utils/enums";
import { PlanetList } from "./components";
import { fetchPlanets } from "../../services/apiServices";
import { useState } from "react";

const Planets = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    [USE_QUERY_KEY.PLANETS, page],
    fetchPlanets
  );
  return (
    <div>
      <h2>Planets</h2>
      <div>useQuery Status Response:</div>
      {status === USE_QUERY_STATUS.LOADING && <div>Loading...</div>}
      {status === USE_QUERY_STATUS.ERROR && (
        <div>Oups could not connect...</div>
      )}
      {status === USE_QUERY_STATUS.SUCCESS && (
        <Fragment>
          <PlanetList planets={resolvedData.results} />
          <button onClick={() => setPage((old) => Math.max(old - 1, 1))}>
            Previous Page
          </button>
          {latestData && latestData.next && (
            <button
              onClick={() =>
                setPage((old) =>
                  !latestData || !latestData.next ? old : old + 1
                )
              }
            >
              Next Page
            </button>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default Planets;
