import { SortEnum } from '@/types';
import Link from 'next/link';
import React from 'react'


interface PaginationProps {
    totalPages: number;
    page: number;
    sort:SortEnum;
    search:string;
  }
const Pagination:React.FC<PaginationProps> = ({totalPages, page,sort,search}) => {

  const isPreviousDisabled = page <= 1;
  const isNextDisabled = page >= totalPages;
  return (
    <div className='flex justify-between items-center max-w-md mx-auto my-5 bg-white rounded shadow p-3'>
        <Link
            href={isPreviousDisabled ? "#" : `/?page=${page - 1}&sort=${sort}&search=${search}`}
            className={` py-2 px-4 rounded ${isPreviousDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-indigo-700 hover:bg-indigo-600"} text-white`}
        >
            Previous
        </Link>
        <Link
            href={isNextDisabled ? "#" : `/?page=${page + 1}&sort=${sort}&search=${search}`}
            className={` py-2 px-4 rounded ${isNextDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-indigo-700 hover:bg-indigo-600"} text-white`}
        >
            Next
        </Link>
    </div>
  )
}

export default Pagination