import { useState } from "react"

export function useFetching(callback) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetching() {
    try {
      setIsLoading(true)
      await callback()
    } catch(err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  } 
  
  return [fetching, isLoading, error]
}