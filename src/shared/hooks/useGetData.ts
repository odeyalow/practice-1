import { useQuery } from "@tanstack/react-query";

function useGetData<T>( url: string, queryKey: string, params?: string | number ) {
    const { data, error, isFetching, isError } = useQuery({
        queryKey: [queryKey, params],
        queryFn: async () => {
            const response = await fetch(url);
            const data: T = await response.json();
            return data;
        }
    })
    return { data, error, isFetching, isError };
}

export default useGetData;