import { useQuery } from "@tanstack/react-query";

function useGetData<T>( url: string, queryKey: string, params?: string | number, alwaysRefetch?: boolean) {
    const { data, error, isFetching, isError } = useQuery({
        queryKey: [queryKey, params],
        queryFn: async (): Promise<T> => {
            const response = await fetch(url);
            const data: T = await response.json();
            return data;
        },
        staleTime: alwaysRefetch ? 0 : 60000
    })
    return { data, error, isFetching, isError };
}

export default useGetData;