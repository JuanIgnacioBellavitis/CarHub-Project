"use client";
import Image from "next/image";
import { SearchManuFacturer } from ".";
import { useState } from "react";
import magnifyingGlass from '@/public/magnifying-glass.svg'
import { useRouter } from "next/navigation";
import modelIcon from '@/public/model-icon.png'
import { toast } from "react-hot-toast";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src={magnifyingGlass}
        alt={"magnifying glass"}
        width={40}
        height={40}
        className='object-contain'
      />
    </button>
);

export default function SearchBar({setManufacturer, setModel}) {

    const [searchManufacturer, setSearchManuFacturer] = useState("");
    const [searchModel, setSearchModel] = useState("");

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      if (searchManufacturer.trim() === "" && searchModel.trim() === "") {
        toast.error("Please, provide a manufacturer or a model.");
        return;
      }
  
      setModel(searchModel.toLowerCase())
      setManufacturer(searchManufacturer.toLowerCase());
    };

  
    return (
        <form className='searchbar' onSubmit={handleSearch}>
          <div className='searchbar__item'>
            <SearchManuFacturer
              selected={searchManufacturer}
              setSelected={setSearchManuFacturer}
            />
            <SearchButton otherClasses='sm:hidden' />
          </div>
          <div className='searchbar__item'>
            <Image
              src={modelIcon}
              width={25}
              height={25}
              className='absolute w-[20px] h-[20px] ml-4'
              alt='car model'
            />
            <input
              type='text'
              name='model'
              value={searchModel}
              onChange={(e) => setSearchModel(e.target.value)}
              placeholder='Tiguan...'
              className='searchbar__input'
            />
            <SearchButton otherClasses='sm:hidden' />
          </div>
          <SearchButton otherClasses='max-sm:hidden' />
        </form>
      );
}
