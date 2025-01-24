"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import numeral from "numeral";
import { useForm } from "react-hook-form";
import { useIndexedDBStore } from "use-indexeddb";
import * as z from "zod";

import {
  Button,
  Calendar,
  Checkbox,
  Form,
  FormControl,
  FormCustomMessage,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  InputWithIconEnd,
  InputWithIconStart,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioGroup,
  RadioGroupItem,
  Separator,
} from "@referrer/ui";

import RichTextEditor from "@/components/Tiptap";

import { request } from "@/lib/axios";
import { referralPostValidator } from "@/lib/validators";

import {
  accept,
  companyList,
  currencies,
  experienceList,
  jobLoationType,
  jobRoleList,
  jobTypeOptionsObj,
  links,
  pdfs,
  skillsList,
} from "@/config";

import { cn } from "@/utils";

import { useStore } from "@/store/store";

import { TPostReferralPost } from "@/types/types";

import { Required } from "../required";
import { sonerToast } from "../soner-toast";
import { AsyncSelectComponent } from "./async-select";
import { SelectComponent } from "./select";

export default function ReferralPost() {
  const { data: session } = useSession();

  const router = useRouter();

  const referralPostFromDraft = useStore((state) => state.referralPostFromDraft);

  const { mutate, isPending } = useMutation({
    mutationKey: ["referral"],
    mutationFn: ({
      accept,
      acceptLimit,
      companyName,
      description,
      expiresAt,
      jobCode,
      jobCompensation,
      jobExperience,
      jobLocationType,
      jobLocation,
      jobRole,
      jobURL,
      jobType,
      postType,
      stars,
      tags,
    }: TPostReferralPost) => {
      return request.post(
        "/posts/referral",
        {
          accept,
          acceptLimit,
          companyName,
          description,
          expiresAt,
          jobCode,
          jobURL,
          jobCompensation,
          jobExperience,
          jobLocationType,
          jobLocation,
          jobRole,
          jobType,
          postType,
          stars,
          tags,
        },
        {
          headers: {
            Authorization: session?.user?.refresh_token && `Bearer ${session?.user?.refresh_token}`,
          },
        }
      );
    },
    onSuccess(data, variables) {
      sonerToast({
        severity: "success",
        title: "Sucess !",
        message: data.data.message,
      });
      router.push("/home");
      form.reset();
    },
    onError(error, variables, context) {
      if (axios.isAxiosError(error) && error?.response.status === 401) {
        router.push("/auth/login");
        sonerToast({
          severity: "error",
          title: "Error !",
          message: error?.response.data.message,
        });
      }
      axios.isAxiosError(error) &&
        error?.response.status != 401 &&
        sonerToast({
          severity: "info",
          title: "Error !",
          message: error?.response.data.message,
        });
    },
  });

  const [countryiso2, setcountryiso2] = useState("");
  const [stateiso2, setstateiso2] = useState("");
  const [draftId, setDraftId] = useState(referralPostFromDraft?.id ?? null);

  const form = useForm<z.infer<typeof referralPostValidator>>({
    resolver: zodResolver(referralPostValidator),
    defaultValues: {
      description: referralPostFromDraft?.body.description ?? "",
      jobRole: referralPostFromDraft?.body.jobRole ?? "",
      companyName: referralPostFromDraft?.body.companyName ?? "",
      jobURL: referralPostFromDraft?.body.jobURL ?? "",
      jobCode: referralPostFromDraft?.body.jobCode ?? "",
      jobType: referralPostFromDraft?.body.jobType ?? "",
      countryLocation: referralPostFromDraft?.body.countryLocation ?? "",
      stateLocation: referralPostFromDraft?.body.stateLocation ?? "",
      cityLocation: referralPostFromDraft?.body.cityLocation ?? "",
      skills: referralPostFromDraft?.body.skills ?? [],
      salaryStartingRange: referralPostFromDraft?.body.salaryStartingRange ?? undefined,
      salaryEndingRange: referralPostFromDraft?.body.salaryEndingRange ?? undefined,
      equityEndingRange: referralPostFromDraft?.body.equityEndingRange ?? undefined,
      equityStartingRange: referralPostFromDraft?.body.equityStartingRange ?? undefined,
      jobExperience: referralPostFromDraft?.body.jobExperience ?? undefined,
      // jobLocation: referralPostFromDraft?.body?.jobLocation
      //   ? { type: referralPostFromDraft?.body.jobLocation }
      //   : undefined,
      jobLocation: {
        type: referralPostFromDraft?.body.jobLocationType ?? "Remote Only",
      },
      currency: referralPostFromDraft?.body.currency ?? undefined,
      stars: referralPostFromDraft?.body.stars ?? 0,
      acceptLimit: referralPostFromDraft?.body.acceptLimit,
      noEquity: referralPostFromDraft?.body.noEquity ?? false,
      accept: {
        message: referralPostFromDraft?.body.accept.message ?? true,
        pdfs: referralPostFromDraft?.body.accept.pdfs ?? ["resume"],
        links: referralPostFromDraft?.body.accept.links ?? ["linkedin"],
      },
      expiresAt: referralPostFromDraft?.body.expiresAt,
    },
  });

  const { add, getByID, update } = useIndexedDBStore("posts");

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

  function onSubmit(values: z.infer<typeof referralPostValidator>) {
    let locationString = values.jobLocation.type;
    if (values?.countryLocation) {
      locationString += " (" + values.countryLocation;
    }
    if (values?.stateLocation) {
      locationString += " - " + values.stateLocation;
    }
    if (values?.cityLocation) {
      locationString += " - " + values.cityLocation;
    }

    let jobLocation;
    if (values?.countryLocation) {
      jobLocation = values.countryLocation;
    }
    if (values?.stateLocation) {
      jobLocation += ", " + values.stateLocation;
    }
    if (values?.cityLocation) {
      jobLocation += ", " + values.cityLocation + "";
    }

    const finalLocationString =
      values.jobLocation.type === "Remote Only" ? values.jobLocation : locationString + ")";

    let tags = values.skills.filter((item) => item !== "");
    let equity = values.noEquity
      ? " (No Equity)"
      : " (" + values.equityStartingRange + "%-" + values.equityEndingRange + "% Equity)";

    let jobCompensation =
      values.salaryStartingRange &&
      values.currency +
        numeral(values.salaryStartingRange).format("0a") +
        "-" +
        values.currency +
        numeral(values.salaryEndingRange).format("0a") +
        equity;

    // console.log("===========", {
    //   accept: values.accept,
    //   acceptLimit: values.acceptLimit,
    //   companyName: values.companyName,
    //   description: values.description,
    //   expiresAt: values.expiresAt,
    //   jobCode: values.jobCode,
    //   jobCompensation: jobCompensation,
    //   jobExperience: values.jobExperience,
    //   jobLocationType: values.jobLocation,
    //   jobLocation: jobLocation,
    //   jobRole: values.jobRole,
    //   jobType: values.jobType,
    //   postType: "REFERRALPOST",
    //   stars: values.stars,
    //   jobURL: values.jobURL,
    //   tags: tags,
    // });

    mutate({
      accept: values.accept,
      acceptLimit: values.acceptLimit,
      companyName: values.companyName,
      description: values.description,
      expiresAt: values.expiresAt,
      jobCode: values.jobCode,
      jobCompensation: jobCompensation,
      jobExperience: values.jobExperience,
      jobLocationType: values.jobLocation.type,
      jobLocation: values.jobLocation.type === "Remote Only" ? null : jobLocation,
      jobRole: values.jobRole,
      jobType: values.jobType,
      postType: "REFERRALPOST",
      stars: values.stars,
      jobURL: values.jobURL,
      tags: tags,
    });
  }
  // console.log("form.watch", form.watch("jobLocation").type);

  const saveDraft = async () => {
    const data = form.getValues();
    if (draftId) {
      try {
        // Fetch existing draft by ID
        const existingDraft = await getByID(draftId);

        if (existingDraft) {
          // Update the draft if it exists
          update({
            //@ts-ignore
            ...existingDraft,
            body: { ...data, postType: "Referral Post", updatedAt: new Date().toDateString() },
          })
            // .then(() => console.log("Draft updated"))
            .catch(console.error);

          sonerToast({
            severity: "success",
            title: "Sucess !",
            message: "Your draft has been sucessfully updated",
          });
        } else {
          sonerToast({
            severity: "error",
            title: "Sucess !",
            message: "Draft not found for update!",
          });
        }
      } catch (error) {
        sonerToast({
          severity: "error",
          title: "Sucess !",
          message: "Error fetching draft:",
        });
        console.error("Error fetching draft:", error);
      }
    } else {
      // Add a new draft if no ID is available
      add({ body: { ...data, postType: "Referral Post", updatedAt: new Date().toDateString() } })
        .then((id) => {
          console.log("Draft added with ID:", id);
          setDraftId(id); // Save the ID for future updates
        })
        .catch(console.error);

      sonerToast({
        severity: "success",
        title: "Sucess !",
        message: "Your post has been sucessfully added to draft",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto mb-20 flex flex-col justify-center gap-6">
        <div className="bg-muted sticky top-0 z-50 mx-auto my-5 flex w-[98%] justify-between rounded-md p-5">
          <div>
            <h2 className="mb-3 text-2xl font-bold capitalize tracking-tight">Referral Post</h2>
            <p className="text-muted-foreground mb-2">
              Post a new referral now and open oppotunies to others !
            </p>
          </div>
          <div className="flex items-start justify-center gap-3">
            <Button className="bg-foreground my-2 rounded-full lg:w-40" isLoading={isPending} type="submit">
              Publish
            </Button>
            <Button onClick={saveDraft} type="button" className="bg-foreground my-2 rounded-full lg:w-40">
              Save as Draft
            </Button>
          </div>
        </div>
        <div className="mx-auto flex w-11/12 flex-col justify-center gap-6">
          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="my-1">
                <FormLabel>
                  Desctiption
                  <Required />
                </FormLabel>
                <FormControl>
                  {/* <TextareaAutosize
                    cacheMeasurements
                    minRows={5}
                    maxRows={30}
                    className="border-input placeholder:text-muted-foreground focus-visible:ring-ring
                    flex w-full rounded-md border bg-transparent px-3 text-sm
                    shadow-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-lg"
                    placeholder="Desscription of the referral. . . . . . ."
                    {...field}
                  /> */}
                  <RichTextEditor
                    charactersLimit={2000}
                    className="min-h-[140px] max-w-full text-base"
                    name="message"
                    placeholder="Write a short message to the referrer here. . . . . ."
                    value={field.value}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>This is the description of the referral.</FormDescription>
              </FormItem>
            )}
          />
          <Separator />
          <h5 className="mb-2 font-bold tracking-tight">1. Job Details</h5>
          <div className="my-2 grid w-full grid-cols-3 items-center gap-4">
            {/* Conpany Name */}
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Conpany Name
                    <Required />
                  </FormLabel>
                  <SelectComponent
                    createAble={true}
                    isMulti={false}
                    value={field.value}
                    options={companyList}
                    onChange={field.onChange}
                    placeholder="Select Conpany Name"
                    {...field}
                  />
                  {/* <FormMessage /> */}
                  <FormCustomMessage>Required</FormCustomMessage>
                  <FormDescription>Select the Conpany Name.</FormDescription>
                </FormItem>
              )}
            />
            {/* Job URL */}
            <FormField
              control={form.control}
              name="jobURL"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job URL</FormLabel>
                  <FormControl>
                    <Input placeholder="Job URL" {...field} />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>This is the job listing url.</FormDescription>
                </FormItem>
              )}
            />
            {/* Job Code */}
            <FormField
              control={form.control}
              name="jobCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Job Code" {...field} />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>This is the job listing code.</FormDescription>
                </FormItem>
              )}
            />
          </div>
          <div className="my-2 grid w-full grid-cols-3 items-center gap-4">
            {/* Job Role */}
            <FormField
              control={form.control}
              name="jobRole"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Job Role
                    <Required />
                  </FormLabel>
                  <SelectComponent
                    createAble={true}
                    isMulti={false}
                    value={field.value}
                    options={jobRoleList}
                    onChange={field.onChange}
                    placeholder="Select Job Role"
                    {...field}
                  />
                  {/* <FormMessage /> */}
                  <FormCustomMessage>Required</FormCustomMessage>
                  <FormDescription>Select the job Role.</FormDescription>
                </FormItem>
              )}
            />
            {/* Job Type */}
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Job Type
                    <Required />
                  </FormLabel>
                  <SelectComponent
                    createAble={false}
                    isMulti={false}
                    value={field.value}
                    options={jobTypeOptionsObj}
                    onChange={field.onChange}
                    placeholder="Select Job Type"
                    {...field}
                  />
                  {/* <FormMessage /> */}
                  <FormCustomMessage>Required</FormCustomMessage>
                  <FormDescription>Select the job type.</FormDescription>
                </FormItem>
              )}
            />
            {/* Job Experience */}
            <FormField
              control={form.control}
              name="jobExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Work experience
                    <Required />
                  </FormLabel>
                  <SelectComponent
                    createAble={false}
                    isMulti={false}
                    value={field.value}
                    options={experienceList}
                    onChange={field.onChange}
                    placeholder="Select Work experience"
                    {...field}
                  />
                  {/* <FormMessage /> */}
                  <FormCustomMessage>Required</FormCustomMessage>
                  <FormDescription>Select the job type.</FormDescription>
                </FormItem>
              )}
            />
          </div>
          {/* Skills */}
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem className="my-2">
                <FormLabel>
                  Skills
                  <Required />
                </FormLabel>
                <SelectComponent
                  createAble={true}
                  isMulti={true}
                  value={field.value}
                  options={skillsList}
                  onChange={field.onChange}
                  placeholder="Select Skills"
                  {...field}
                />
                <FormMessage />
                <FormDescription>Select the Skills Required.</FormDescription>
              </FormItem>
            )}
          />
          <Separator />
          <h5 className="font-bold tracking-tight">2. Salary & Equity</h5>
          <div className="mb-2">
            <FormDescription>
              Jobs without salaries are not returned in search results for candidates. If you'd rather not
              share these details, you can always promote your job once it is published.
            </FormDescription>
          </div>
          {/* Salary Range */}
          {/* <FormField
            control={form.control}
            name="jobCompensation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Salary Range
                  <Required />
                </FormLabel>
                <SelectComponent
                  createAble={true}
                  isMulti={false}
                  value={field.value}
                  options={jobTypeList}
                  onChange={field.onChange}
                  placeholder="Select Salary Range"
                  {...field}
                />
                {/* <FormMessage /> */}
          {/* <FormCustomMessage>Required</FormCustomMessage>
                <FormDescription>Select the salary Range.</FormDescription>
              </FormItem> */}
          {/* )}
          />  */}
          {/* Currency */}
          <FormField
            control={form.control}
            name="currency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Currency
                  <Required />
                </FormLabel>
                <SelectComponent
                  createAble={false}
                  isMulti={false}
                  // value={field.value}
                  options={currencies}
                  // onChange={field.onChange}
                  value={field.value ? { value: field.value, label: field.value } : ""}
                  onChange={(newValue: { value: string; label: string } | "") => {
                    field.onChange(newValue);
                  }}
                  placeholder="Select Currency"
                  {...field}
                />
                <FormCustomMessage>Required</FormCustomMessage>
                <FormDescription>Select the Currency.</FormDescription>
              </FormItem>
            )}
          />
          <h6 className="font-bold tracking-tight">Annual salary range</h6>
          <div className="grid w-full grid-cols-2 items-center gap-4">
            {/* Starting Range */}
            <FormField
              control={form.control}
              name="salaryStartingRange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Starting Range</FormLabel>
                  <FormControl>
                    <InputWithIconStart
                      type="text"
                      ///@ts-ignore
                      icon={form.watch("currency")?.value ?? "$"}
                      placeholder="50,000"
                      // value={numeral(field.value).format("0,0")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Ending Range */}
            <FormField
              control={form.control}
              name="salaryEndingRange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ending Range</FormLabel>
                  <FormControl>
                    <InputWithIconStart
                      ///@ts-ignore
                      icon={form.watch("currency")?.value ?? "$"}
                      placeholder="80,000"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <h6 className="font-bold tracking-tight">Equity range</h6>
          <div className="grid w-full grid-cols-2 items-center gap-4">
            {/* Equity Starting Range */}
            <FormField
              control={form.control}
              name="equityStartingRange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Starting Range</FormLabel>
                  <FormControl>
                    <InputWithIconEnd
                      disabled={form.watch("noEquity")}
                      icon="%"
                      placeholder="0.1"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Equity Ending Range */}
            <FormField
              control={form.control}
              name="equityEndingRange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ending Range</FormLabel>
                  <FormControl>
                    <InputWithIconEnd
                      disabled={form.watch("noEquity")}
                      icon="%"
                      placeholder="1.2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* No Equity */}
          <FormField
            control={form.control}
            name="noEquity"
            render={() => (
              <FormItem className="my-2 mr-auto">
                <FormField
                  control={form.control}
                  name="noEquity"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-row items-center justify-center space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormLabel className="mt-2 font-normal">No Equity</FormLabel>
                      </FormItem>
                    );
                  }}
                />
              </FormItem>
            )}
          />
          <Separator />
          <div className="mb-2">
            <h5 className="font-bold tracking-tight">3. Location</h5>
            <FormDescription>Add your location policy for this job.</FormDescription>
          </div>
          {/* Job Location Type */}
          <FormField
            control={form.control}
            name="jobLocation"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>
                  Location <Required />
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value.type}
                    className="flex items-center justify-center gap-8">
                    {jobLoationType.map((data) => (
                      <FormItem
                        key={data.id}
                        className="flex items-center justify-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={data.label} />
                        </FormControl>
                        <FormLabel className="font-normal">{data.label}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
                <div className="flex w-full justify-center">
                  <FormDescription>Select a Location type for the referral.</FormDescription>
                </div>
              </FormItem>
            )}
          />
          <div
            className={cn(
              "my-2 grid w-full grid-cols-3 items-center gap-4",
              form.watch("jobLocation")?.type === "Remote Only" && "cursor-not-allowed opacity-50"
            )}>
            {/* Country Location */}
            <FormField
              control={form.control}
              name="countryLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={form.getValues("countryLocation") ? "text-foreground" : ""}>
                    Country Location <Required />
                  </FormLabel>
                  <AsyncSelectComponent
                    isDisabled={form.watch("jobLocation").type === "Remote Only"}
                    isMulti={false}
                    loadOptions={countriesList}
                    onChange={(data) => {
                      form.setValue("countryLocation", data?.value);
                      setcountryiso2(data?.iso2);
                    }}
                    placeholder="📍 Select Country"
                    defaultOptions
                  />
                  {/* <FormMessage /> */}
                  {form.getValues("countryLocation") ? (
                    <></>
                  ) : (
                    <FormCustomMessage>Required</FormCustomMessage>
                  )}
                  <FormDescription>Select a Country Location.</FormDescription>
                </FormItem>
              )}
            />
            {/* State Location */}
            <FormField
              control={form.control}
              name="stateLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={form.getValues("stateLocation") ? "text-foreground" : ""}>
                    State Location
                  </FormLabel>
                  <AsyncSelectComponent
                    isDisabled={form.watch("jobLocation").type === "Remote Only"}
                    isMulti={false}
                    loadOptions={statesList}
                    onChange={(data) => {
                      form.setValue("stateLocation", data?.value);
                      setstateiso2(data?.iso2);
                    }}
                    placeholder="📍 Select State"
                    defaultOptions={countryiso2 ? true : false}
                  />
                  {/* <FormMessage /> */}
                  {form.getValues("stateLocation") ? <></> : <FormCustomMessage>Required</FormCustomMessage>}
                  <FormDescription>Select a State Location.</FormDescription>
                </FormItem>
              )}
            />
            {/* City Location */}
            <FormField
              control={form.control}
              name="cityLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={form.getValues("cityLocation") ? "text-foreground" : ""}>
                    City Location
                  </FormLabel>
                  <AsyncSelectComponent
                    isMulti={false}
                    loadOptions={cityList}
                    placeholder="📍 Select City"
                    onChange={(data) => {
                      form.setValue("cityLocation", data?.value);
                    }}
                    defaultOptions={false}
                    isDisabled={form.getValues("countryLocation") ? false : true}
                  />
                  {/* <FormMessage /> */}
                  {form.getValues("cityLocation") ? <></> : <FormCustomMessage>Required</FormCustomMessage>}
                  <FormDescription>Select Country to choose a City.</FormDescription>
                </FormItem>
              )}
            />
          </div>
          <Separator />
          <div className="mb-2">
            <h5 className="font-bold tracking-tight">4. Accept</h5>
            <FormDescription>What you want from referral seekers</FormDescription>
          </div>
          {/* Accept */}
          <FormField
            control={form.control}
            name="accept.message"
            render={() => (
              <FormItem className="my-2">
                <FormLabel>
                  Accept
                  <Required />
                </FormLabel>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {accept.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="accept.message"
                      render={({ field }) => {
                        return (
                          <FormItem key={item.id} className="flex flex-row items-center space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                // checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked ? true : false;
                                  //     ? field.onChange([...field.value, item.id])
                                  // : field.onChange(field.value?.filter((value) => value !== item.id));
                                }}
                              />
                              {/*  <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(field.value?.filter((value) => value !== item.id));
                                }}
                              />*/}
                            </FormControl>
                            <FormLabel className="font-normal">{item.label}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
                <FormDescription>Select the items you want to accept from applicant.</FormDescription>
              </FormItem>
            )}
          />
          {/* Accept PDFs */}
          <FormField
            control={form.control}
            name="accept.pdfs"
            render={() => (
              <FormItem className="my-2">
                <FormLabel>
                  Accept PDFs
                  <Required />
                </FormLabel>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {pdfs.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="accept.pdfs"
                      render={({ field }) => {
                        return (
                          <FormItem key={item.id} className="flex flex-row items-center space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(field.value?.filter((value) => value !== item.id));
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{item.label}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
                <FormDescription>Select the items you want to accept from applicant.</FormDescription>
              </FormItem>
            )}
          />
          {/* Accept Links */}
          <FormField
            control={form.control}
            name="accept.links"
            render={() => (
              <FormItem className="my-2">
                <FormLabel>
                  Accept Links
                  <Required />
                </FormLabel>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {links.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="accept.links"
                      render={({ field }) => {
                        return (
                          <FormItem key={item.id} className="flex flex-row items-center space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(field.value?.filter((value) => value !== item.id));
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{item.label}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
                <FormDescription>Select the items you want to accept from applicant.</FormDescription>
              </FormItem>
            )}
          />
          <div className="my-2 grid w-full grid-cols-2 items-center gap-4">
            {/* Stars */}
            <FormField
              control={form.control}
              name="stars"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stars</FormLabel>
                  <FormControl>
                    <Input placeholder="Stars ⭐" type="number" className="" value={field.value} {...field} />
                  </FormControl>
                  <FormDescription>Number of Stars you want to accept.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Limit */}
            <FormField
              control={form.control}
              name="acceptLimit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Limit</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Accepting Limit"
                      type="number"
                      className=""
                      value={field.value}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Number of proposal you want to accept.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Separator />
          <div className="mb-2">
            <h5 className="font-bold tracking-tight">5. Deadline</h5>
            <FormDescription>Give a deadline of the post !</FormDescription>
          </div>
          {/* Deadline of Post */}
          <FormField
            control={form.control}
            name="expiresAt"
            render={({ field }) => (
              <FormItem className="mx-auto my-2 flex flex-col">
                <FormLabel>Deadline of Post</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}>
                        {field.value ? format(field.value, "PPP") : <span>Pick the deadline date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
                <FormDescription>Select the deadline of the Post.</FormDescription>
              </FormItem>
            )}
          />
          {/* Submit */}
          {/* <Separator />
          <div className="flex flex-col items-center justify-center">
            <Button
              className="bg-foreground my-2 w-6/12 rounded-full lg:w-40"
              isLoading={isPending}
              type="submit">
              Post
            </Button>
            <Button className="bg-foreground my-2 w-6/12 rounded-full lg:w-40">Save as Draft</Button>
          </div> */}
        </div>
      </form>
    </Form>
  );
}
{
  /* <RadioGroup
                    onValueChange={field.onChange}
                    // defaultValue={field.value}
                    className="flex items-center justify-center gap-8">
                    <FormItem className="flex items-center justify-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Remote" />
                      </FormControl>
                      <FormLabel className="font-normal">Remote</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center justify-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Hybrid" />
                      </FormControl>
                      <FormLabel className="font-normal">Hybrid</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center justify-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="On-site" />
                      </FormControl>
                      <FormLabel className="font-normal">On-site</FormLabel>
                    </FormItem>
                  </RadioGroup> */
}
