"use client";

import { SortEnum } from '@/types';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent } from 'react';

interface ActionBarProps {
  sort:SortEnum;
  search:string;
}

const ActionBar: React.FC<ActionBarProps> = ({ sort,search}) => {
  const [sortValue, setSortValue] = useState<SortEnum>(sort);
  const [searchValue,setSearchValue] = useState(search);
  const router = useRouter();


  const sortHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const sortSelected = e.target.value as SortEnum;
    router.push(`/?page=1${sortSelected!==""?`&sort=${sortSelected}`:""}&search=${searchValue!==""?searchValue:""}`);
    setSortValue(sortSelected);
  };

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const searchData = e.target.value;
    router.push(`/?page=1${sortValue !== "" ? `&sort=${sortValue}` : ""}&search=${searchData !== "" ? searchData : ""}`);
    setSearchValue(searchData);
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between bg-white p-4 rounded shadow gap-4">
      <div className='max-sm:w-full'>
        <select
          value={sortValue}
          onChange={sortHandler}
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 "
        >
          <option value={SortEnum.None}>Sort By</option>
          <option value={SortEnum.Price}>Price</option>
          <option value={SortEnum.Rating}>Rating</option>
        </select>
      </div>
      <div className='relative max-sm:w-full'>
        <input
          type="text"
          value={searchValue}
          onChange={searchHandler}
          placeholder="Search products..."
          className="py-2 pl-10 pr-4 rounded border border-gray-300 w-full"
        />
        <Search className='absolute top-1/2 -translate-y-1/2 left-2 text-slate-500'/>

      </div>
     
     
    </div>
  );
};

export default ActionBar;