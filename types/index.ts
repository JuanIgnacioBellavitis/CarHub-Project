import { MouseEventHandler } from "react";
import { Dispatch, SetStateAction } from 'react';

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  setFilter: Dispatch<SetStateAction<any>>
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: Dispatch<SetStateAction<number>>
}

export interface SearchManuFacturerProps {
  selected: string;
  setSelected: (manufacturer: string) => void;
}

export interface CardDetailsProps {
  isOpen: boolean, 
  closeModal: () => void, 
  car: CarProps
}

export interface SearchBarProps {
  setManufacturer: Dispatch<SetStateAction<string>>,
  setModel: Dispatch<SetStateAction<string>>
}