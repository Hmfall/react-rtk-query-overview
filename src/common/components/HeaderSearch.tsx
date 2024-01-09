import React, { useState } from 'react';
import BaseInput from './BaseInput';
import { Input } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';


// @ts-ignore
// const HeaderSearch = ({ query, setSearchParams }) => {
const HeaderSearch = () => {
   const [search, setSearch] = useState('');
   const [_, setSearchParams] = useSearchParams();

   const navigate = useNavigate();

   const handleSubmit = (event: any) => {
      event.preventDefault();
      navigate('/search');
      const form = event.target;
      const query = form.search.value;
      setSearchParams({ query });
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <Input
               required
               type="search"
               name="search"
               sx={{
                  backgroundColor: 'gray',
               }}
               value={search}
               onChange={(event) => setSearch(event.target.value)}
            />
         </form>
      </div>
   );
};

export default HeaderSearch;