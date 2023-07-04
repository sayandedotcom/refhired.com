"use client";

import { ThemeSwitcher } from "@/components/custom-components";
import { SelectComponent } from "../../components/ui";

const colors = [
  "background",
  "foreground",

  "muted",
  "muted-foreground",

  "popover",
  "popover-foreground",

  "card",
  "card-foreground",

  "border",
  "input",

  "primary",
  "primary-foreground",

  "secondary",
  "secondary-foreground",

  "accent",
  "accent-foreground",

  "destructive",
  "destructive-foreground",

  "ring",

  "radius",
];

const Page = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(event.target.cars.value);
    console.log(event.target.cars.value);
  };
  return (
    <>
      {/* <div className='flex flex-wrap bg-green-400'> */}
      <ThemeSwitcher />
      {/* {colors.map((color) => (
          <div key={color} className={`w-36 aspect-square bg-${color}`}>
            {color}
          </div>
        ))} */}
      {/* </div> */}
      <div className='flex flex-wrap bg-green-300'>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-background'>
          background
        </div>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-foreground'>
          foreground
        </div>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-muted'>
          muted
        </div>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-muted-foreground'>
          muted-foreground
        </div>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-popover'>
          popover
        </div>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-popover-foreground'>
          popover-foreground
        </div>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-card'>
          card
        </div>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-card-foreground'>
          card-foreground
        </div>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-border'>
          border
        </div>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-input'>
          input
        </div>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-primary'>
          primary
        </div>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-primary-foreground'>
          primary-foreground
        </div>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-secondary'>
          secondary
        </div>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-secondary-foreground'>
          secondary-foreground
        </div>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-accent'>
          accent
        </div>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-accent-foreground'>
          accent-foreground
        </div>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-destructive'>
          destructive
        </div>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-destructive-foreground'>
          destructive-foreground
        </div>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-ring'>
          ring
        </div>
        <div className='w-28 aspect-square border border-green-600 dark:border-white bg-radius'>
          radius
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {/* <label>Choose a car:</label>
        <select name='cars' id='cars'>
          <option value='volvo'>Volvo</option>
          <option value='saab'>Saab</option>
          <option value='mercedes'>Mercedes</option>
          <option value='audi'>Audi</option>
        </select> */}
        <SelectComponent
          createAble={true}
          options={[
            { value: "volvo", label: "Volvo" },
            { value: "saab", label: "Saab" },
            { value: "mercedes", label: "Mercedes" },
            { value: "audi", label: "Audi" },
          ]}
        />
        <input type='submit'></input>
      </form>
    </>
  );
};

export default Page;
