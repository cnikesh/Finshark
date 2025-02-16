import React, { ChangeEvent, useState, SyntheticEvent } from 'react'

type Props = {}

const Search : React.FC = (props: Props) : JSX.Element => {
    const [search, setSearch] = useState<string>();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    }

    const onClick = (event: SyntheticEvent) => {
        console.log(event);
    };

  return (
    <div>
        <input value={search} onChange={(e) => handleChange(e)}></input>
        <button onClick={(e) => onClick(e)}/>
    </div>
  )
}

export default Search;