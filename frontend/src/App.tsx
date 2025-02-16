import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css'
import CardList from './Components/CardList/CardList'
import Search from './Components/Search/Search'
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {

  const [search, setSearch] = useState<string>();
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e.target.value)
    }

    const onClick = async (event: SyntheticEvent) => {
      console.log(search);
        const result = await searchCompanies(search);
        if(typeof result === "string"){
          setServerError(result);
        }else if(Array.isArray(result.data)){
          setSearchResult(result.data);
        }
        console.log(searchResult);
    };

    const onPortfolioCreate = (e: SyntheticEvent) => {
      e.preventDefault();
      console.log(e);
    }
  
  return (
    <div className='App'>
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
      {serverError && <h1>{serverError}</h1>}
    </div>
  )
}

export default App
