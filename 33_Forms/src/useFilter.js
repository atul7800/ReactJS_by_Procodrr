import { useState } from "react"

export function useFilter(data, callBack) {
    const [query, setQuery] = useState('')
    const filteredData = data.filter((expense) => {
      return callBack(expense).includes(query);
    });

    return [filteredData, setQuery]
}