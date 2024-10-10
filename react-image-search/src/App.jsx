import { useState } from "react"
import ImageList from "./components/ImageList"
import SearchForm from "./components/SearchForm"

function App() {
  const [searchData, setSearchData] = useState({});
  return (
    <div className="flex justify-center">
      <div className="w-1/2 m-8 bg-white p-8 rounded-md shadow-md flex flex-col gap-4">
        <h2 className="text-2xl font-bold">React image search app</h2>
        <SearchForm setSearchData={setSearchData} />
        <ImageList searchData={searchData} />
      </div>
    </div>
  )
}

export default App
