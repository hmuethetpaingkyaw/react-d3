import axios from "axios";
import useSWR from "swr";

function useFetch(...args) {
  const fetcher = async (...args) => {
    const result = await axios.get(args)
    return result.data;
  };
  const { data, error, isLoading, mutate } = useSWR(args, fetcher);

  return {
    data,
    isLoading,
    error,
    refresh: mutate
  };
}

export default useFetch;
