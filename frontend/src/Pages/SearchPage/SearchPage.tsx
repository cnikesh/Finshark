import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import Search from '../../Components/Search/Search';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';
import { PortfolioGet } from '../../Models/Portfolio';
import { portfolioAddAPI, portfolioDeleteAPI, portfolioGetAPI } from '../../Services/PortfolioService';
import { toast } from 'react-toastify';

interface Props {}

const SearchPage = (props: Props) => {

  const [search, setSearch] = useState<string>();
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getPortfolio();
  }, [])

  const getPortfolio = () => {
    portfolioGetAPI()
    .then( (res) => {
      if(res?.data){
        setPortfolioValues(res.data)
      }
    }).catch((e) => {toast.warning("Could not get portfolio values!")})
  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    //setServerError(result.data);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };

    const onPortfolioCreate = (e: any) => {
      e.preventDefault();
      portfolioAddAPI(e.target[0].value)
      .then((res) => {
        if(res?.status == 204){
          toast.success("Stock added to portfolio!")
          getPortfolio();
        }
      }).catch((e) => {
        toast.warning("Could not add stock to portfolio!")
      })
    }

    const onPortfolioDelete = (e: any) => {
      e.preventDefault();
      portfolioDeleteAPI(e.target[0].value)
      .then( (res) => {
        if(res?.status == 200){
          toast.success("Stock deleted from portfolio!")
          getPortfolio();
        }
      }).catch((e) => {
        toast.warning("Could not delete stock from portfolio!")
      })
    }

  return (
    <div className='App'>
    <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
    <ListPortfolio portfolioValues={portfolioValues!} onPortfolioDelete={onPortfolioDelete}/>
    <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
    {serverError && <h1>{serverError}</h1>}
  </div>
  )
}

export default SearchPage;