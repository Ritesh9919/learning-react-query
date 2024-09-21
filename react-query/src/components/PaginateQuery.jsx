import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchColors = (page) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${page}`);
};

function PaginateQuery() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    }
  );
  return (
    <div>
      <ol>
        {data?.data.map((color) => (
          <li>{color.label}</li>
        ))}
      </ol>
      <button
        onClick={() => setPageNumber((prev) => prev - 1)}
        disabled={pageNumber == 1}
        className="mr-5"
      >
        Prev
      </button>
      <button
        onClick={() => setPageNumber((prev) => prev + 1)}
        disabled={pageNumber == 4}
      >
        Next
      </button>
    </div>
  );
}

export default PaginateQuery;
