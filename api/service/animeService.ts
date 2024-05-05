import useSWR from "swr"
import { fetcher } from "../axiosConfig"

interface IQueryParamsGetAnime {
    q? :string
    page?: number
    limit? : number

}

class AnimeService { 
    getAnime(payload : IQueryParamsGetAnime) {
        const {data,error,isLoading} = useSWR(`/top/anime?type=${payload.q}&page=${Number(payload.page)}&limit=${Number(payload.limit)}`,fetcher)

        return {
            data,
            error,
            isLoading
        }
     }
}

export const animeService = new AnimeService()