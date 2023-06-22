"use client";

import { Input } from "@referrer/ui";

const Search = () => {
  return (
    <div className='flex flex-col items-center mt-4'>
      <Input
        type='text'
        placeholder='Search.....'
        className='rounded-full w-11/12 bg-muted text-lg'
      />
    </div>
  );
};

export default Search;
