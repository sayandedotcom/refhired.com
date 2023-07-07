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
        <div className="aspect-square w-28 border border-green-600 bg-background dark:border-white">
          background
        </div>
        <div className="aspect-square w-28 border border-green-600 bg-foreground dark:border-white">
          foreground
        </div>
        <div className="aspect-square w-28 border border-green-600 bg-muted dark:border-white">muted</div>
        <div className="aspect-square w-28 border border-green-600 bg-muted-foreground dark:border-white">
          muted-foreground
        </div>
        <div className="aspect-square w-28 border border-green-600 bg-popover dark:border-white">popover</div>
        <div className="aspect-square w-28 border border-green-600 bg-popover-foreground dark:border-white">
          popover-foreground
        </div>
        <div className="aspect-square w-28 border border-green-600 bg-card dark:border-white">card</div>
        <div className="aspect-square w-28 border border-green-600 bg-card-foreground dark:border-white">
          card-foreground
        </div>
        <div className="aspect-square w-28 border border-green-600 bg-border dark:border-white">border</div>
        <div className="aspect-square w-28 border border-green-600 bg-input dark:border-white">input</div>
        <div className="aspect-square w-28 border border-green-600 bg-primary dark:border-white">primary</div>
        <div className="aspect-square w-28 border border-green-600 bg-primary-foreground dark:border-white">
          primary-foreground
        </div>
        <div className="aspect-square w-28 border border-green-600 bg-secondary dark:border-white">
          secondary
        </div>
        <div className="aspect-square w-28 border border-green-600 bg-secondary-foreground dark:border-white">
          secondary-foreground
        </div>
        <div className="aspect-square w-28 border border-green-600 bg-accent dark:border-white">accent</div>
        <div className="aspect-square w-28 border border-green-600 bg-accent-foreground dark:border-white">
          accent-foreground
        </div>
        <div className="aspect-square w-28 border border-green-600 bg-destructive dark:border-white">
          destructive
        </div>
        <div className="aspect-square w-28 border border-green-600 bg-destructive-foreground dark:border-white">
          destructive-foreground
        </div>
        <div className="aspect-square w-28 border border-green-600 bg-ring dark:border-white">ring</div>
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
