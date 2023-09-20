import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"
import { Screenshot } from "../entities/Screenshot";

const useScreenshots = (screenshotId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${screenshotId}/screenshots`);

  return useQuery({
    queryKey: ['screenshots', screenshotId],
    queryFn: apiClient.getAll,
  })
}

export default useScreenshots;