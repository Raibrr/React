import { useEffect, useState } from "react"

const localcache = {}

export const useFetch = (url) => {

    const [state, setState] = useState({
			data: null,
			isLoading: true,
			hasError: false,
			error: null,
    });

    useEffect(() => {
      getFetch()
    }, [url])

		const setLoadingState = () => {
			setState({
				data:null,
				isLoading: true,
				hasError: false,
				error:null
			})
		}

    const getFetch = async () => {

			if (localcache[url]){
				setState({
					data: localcache[url],
					isLoading: false,
					hasError: false,
					error: null
				})
				return;
			}

			setLoadingState()

			const response = await fetch(url);
			const data = await response.json()

			if(!response.ok) {
				setState({
					data:null,
					isLoading:false,
					hasError: true,
					error:{
						code: response.status,
						message: response.statusText
					}
				})
				return;
			}

			setState({
				data,
				isLoading:false,
				hasError:false,
				error: null
			})
			
			localcache[url] = data;
    }

    

    return {
			data: state.data,
			isLoading: state.isLoading,
			hasError: state.hasError
    }
}
