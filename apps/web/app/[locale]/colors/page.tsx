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
      <div className="flex flex-wrap bg-green-300">
        <div className="bg-background aspect-square w-28 border border-green-600 dark:border-white">
          background
        </div>
        <div className="bg-foreground aspect-square w-28 border border-green-600 dark:border-white">
          foreground
        </div>
        <div className="bg-muted aspect-square w-28 border border-green-600 dark:border-white">muted</div>
        <div className="bg-muted-foreground aspect-square w-28 border border-green-600 dark:border-white">
          muted-foreground
        </div>
        <div className="bg-popover aspect-square w-28 border border-green-600 dark:border-white">popover</div>
        <div className="bg-popover-foreground aspect-square w-28 border border-green-600 dark:border-white">
          popover-foreground
        </div>
        <div className="bg-card aspect-square w-28 border border-green-600 dark:border-white">card</div>
        <div className="bg-card-foreground aspect-square w-28 border border-green-600 dark:border-white">
          card-foreground
        </div>
        <div className="bg-border aspect-square w-28 border border-green-600 dark:border-white">border</div>
        <div className="bg-input aspect-square w-28 border border-green-600 dark:border-white">input</div>
        <div className="bg-primary aspect-square w-28 border border-green-600 dark:border-white">primary</div>
        <div className="bg-primary-foreground aspect-square w-28 border border-green-600 dark:border-white">
          primary-foreground
        </div>
        <div className="bg-secondary aspect-square w-28 border border-green-600 dark:border-white">
          secondary
        </div>
        <div className="bg-secondary-foreground aspect-square w-28 border border-green-600 dark:border-white">
          secondary-foreground
        </div>
        <div className="bg-accent aspect-square w-28 border border-green-600 dark:border-white">accent</div>
        <div className="bg-accent-foreground aspect-square w-28 border border-green-600 dark:border-white">
          accent-foreground
        </div>
        <div className="bg-destructive aspect-square w-28 border border-green-600 dark:border-white">
          destructive
        </div>
        <div className="bg-destructive-foreground aspect-square w-28 border border-green-600 dark:border-white">
          destructive-foreground
        </div>
        <div className="bg-ring aspect-square w-28 border border-green-600 dark:border-white">ring</div>
        <div className="bg-radius aspect-square w-28 border border-green-600 dark:border-white">radius</div>
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
        <input type="submit"></input>
      </form>
    </>
  );
};

export default Page;
