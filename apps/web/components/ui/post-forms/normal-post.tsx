"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Separator,
  Textarea,
} from "@referrer/ui";

import { normalPostValidator } from "@/lib/validators";

import { AsyncSelectComponent } from "./async-select";

export default function NormalPost() {
  const form = useForm<z.infer<typeof normalPostValidator>>({
    resolver: zodResolver(normalPostValidator),
    defaultValues: {
      title: "",
      countryLocation: "",
      stateLocation: "",
      cityLocation: "",
    },
  });
  const [countryiso2, setcountryiso2] = useState("");
  const [stateiso2, setstateiso2] = useState("");
  const mapResponseToValuesAndLabels = (data) => ({
    value: data.name,
    label: data.name,
    iso2: data?.iso2,
  });

  async function countriesList(value) {
    const data = await fetch("https://api.countrystatecity.in/v1/countries", {
      method: "GET",
      headers: {
        "X-CSCAPI-KEY": "cGI0bzZlY3JDWUNkT2lNak9SOHZnVHNQam5QYnREQUhseEtNUzducg==",
      },
      redirect: "follow",
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((result) => result.map(mapResponseToValuesAndLabels))
      .then((final) => final.filter((i) => i.label.toLowerCase().includes(value.toLowerCase())));
    return data;
  }

  async function statesList(value) {
    const data = await fetch(
      `https://api.countrystatecity.in/v1${countryiso2 ? `/countries/${countryiso2}` : ""}/states`,
      {
        method: "GET",
        headers: {
          "X-CSCAPI-KEY": "cGI0bzZlY3JDWUNkT2lNak9SOHZnVHNQam5QYnREQUhseEtNUzducg==",
        },
        redirect: "follow",
        cache: "no-store",
      }
    )
      .then((response) => response.json())
      .then((result) => result.map(mapResponseToValuesAndLabels))
      .then((final) => final.filter((i) => i.label.toLowerCase().includes(value.toLowerCase())));
    return data;
  }

  async function cityList(value) {
    const data = await fetch(
      `https://api.countrystatecity.in/v1${
        stateiso2 ? `/countries/${countryiso2}/states/${stateiso2}` : `/countries/${countryiso2}`
      }/cities`,
      {
        method: "GET",
        headers: {
          "X-CSCAPI-KEY": "cGI0bzZlY3JDWUNkT2lNak9SOHZnVHNQam5QYnREQUhseEtNUzducg==",
        },
        redirect: "follow",
        cache: "no-store",
      }
    )
      .then((response) => response.json())
      .then((result) => result.map(mapResponseToValuesAndLabels))
      .then((final) => final.filter((i) => i.label.toLowerCase().includes(value.toLowerCase())));
    return data;
  }

  const handleChangeCountries = (data) => {
    setcountryiso2(data?.iso2);
    console.log("onChange=========", data?.iso2);
  };

  const handleChangeStates = (data) => {
    setstateiso2(data?.iso2);
    console.log("onChange state=========", data?.iso2);
  };

  async function onSubmit(values: z.infer<typeof normalPostValidator>) {
    console.log(values);
    form.reset();
  }

  console.log("skills", form.watch().countryLocation);

  return (
    <div className="mb-20">
      <div className="mx-auto my-5 w-11/12">
        <h2 className="mb-3 text-2xl font-bold capitalize tracking-tight">Post what going around !</h2>
        <p className="text-muted-foreground mb-2">
          Post your opinion, about jobs , referrals or anything etc.
        </p>
        <Separator />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto flex w-11/12 flex-col justify-center gap-6">
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="rounded-radius h-32 md:text-lg"
                    placeholder="Write here. . . . . . ."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <AsyncSelectComponent
            isMulti={false}
            loadOptions={countriesList}
            onChange={(e) => console.log("onChange==============", e)}
            placeholder="Select Country"
            cacheOptions
            defaultOptions
          />
          <AsyncSelectComponent
            isMulti={false}
            loadOptions={statesList}
            onChange={handleChangeStates}
            placeholder="Select State"
            defaultOptions={countryiso2 ? true : false}
          />
          <AsyncSelectComponent
            isMulti={false}
            loadOptions={cityList}
            placeholder="Select City"
            defaultOptions={false}
          />

          <div className="flex flex-col items-center justify-center">
            <Button className="bg-foreground my-2 w-6/12" type="submit">
              Post
            </Button>
            <Button className="bg-foreground my-2 w-6/12">Save as Draft</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
