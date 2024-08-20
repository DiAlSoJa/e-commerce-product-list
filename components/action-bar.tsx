"use client";

import { SortEnum } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent } from 'react';

interface ActionBarProps {
  totalPages: number;
  page: number;
  sort:SortEnum;
  search:string;
}

const ActionBar: React.FC<ActionBarProps> = ({ totalPages, page,sort,search}) => {
  const [sortValue, setSortValue] = useState<SortEnum>(sort);
  const [searchValue,setSearchValue] = useState(search);
  const router = useRouter();

  const isPreviousDisabled = page <= 1;
  const isNextDisabled = page >= totalPages;

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
    <div className="flex items-center justify-between bg-white p-4 rounded shadow">
      <div>
        <select
          value={sortValue}
          onChange={sortHandler}
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value={SortEnum.None}>Sort By</option>
          <option value={SortEnum.Price}>Price</option>
          <option value={SortEnum.Rating}>Rating</option>
        </select>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={searchValue}
          onChange={searchHandler}
          placeholder="Search products..."
          className="py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Link
          href={isPreviousDisabled ? "#" : `/?page=${page - 1}&sort=${sortValue}&search=${searchValue}`}
          className={`ml-4 py-2 px-4 rounded ${isPreviousDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-indigo-700 hover:bg-indigo-600"} text-white`}
        >
          Previous
        </Link>
        <Link
          href={isNextDisabled ? "#" : `/?page=${page + 1}&sort=${sortValue}&search=${searchValue}`}
          className={`ml-2 py-2 px-4 rounded ${isNextDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-indigo-700 hover:bg-indigo-600"} text-white`}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default ActionBar;