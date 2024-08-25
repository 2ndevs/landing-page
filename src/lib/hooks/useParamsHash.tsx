import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export const useParamsHash = () => {
  const params = useSearchParams()
  const [paramsHash, setParamsHash] = useState<string>("")

  useEffect(() => {
    if (
      !params ||
      !global?.window ||
      typeof window === "undefined"
    ) return

    const hashId = window?.location?.hash ?? ""
    setParamsHash(hashId)
  }, [params])

  return paramsHash
}
