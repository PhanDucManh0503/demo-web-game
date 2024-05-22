import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
      retryDelay(failureCount) {
        return (failureCount + 1) * 700;
      },
    },
  },
});

export default queryClient;
