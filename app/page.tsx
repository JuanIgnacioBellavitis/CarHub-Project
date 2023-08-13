"use client";
import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@/components";
import { useEffect, useState } from 'react';
import { toast } from "react-hot-toast/headless";
import Image from "next/image";
import loadingImg from '@/public/car-logo.svg'

export default function Home({ searchParams }: HomeProps) {

  const [allCars, setAllCars] = useState([]);
  const [loading, setloading] = useState(false);

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const [fuel, setFuel] = useState("");  
  const [year, setYear] = useState(2022);

  const [limit, setLimit] = useState(10);

  const getCars = async () => {

    setloading(true);

    try{
      const result = await fetchCars({
        manufacturer: manufacturer,
        year: year,
        fuel: fuel,
        limit: limit,
        model: model
       });
  
       setAllCars(result);
    }catch (error) {
      toast.error("There was en error.");
      console.log(error);
    }finally {
      setloading(false)
    }

  }

  useEffect(() => {
    getCars();
  }, [manufacturer, model, fuel, limit, year])

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar 
            setManufacturer={setManufacturer}
            setModel={setModel}
          />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} setFilter={setFuel}/>
            <CustomFilter title='year' options={yearsOfProduction} setFilter={setYear}/>
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            {
              loading && (
                <div className="mt-16 w-full flex-center">
                  <Image src={loadingImg} alt="loading" width={50} height={50} className="object-contain"/>
                </div>
              )
            }

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit> allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>            
          </div>
        )}
      </div>
    </main>
  );
}