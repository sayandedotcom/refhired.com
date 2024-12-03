"use client";

import { useEffect } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { ListFilter } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Checkbox,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@referrer/ui";

import { SelectComponent } from "@/components/ui";

import { filterValidator } from "@/lib/validators";

import {
  companyList,
  experienceList,
  jobLoationType,
  jobRoleList,
  jobTypeOptionsObj,
  postType,
  skillsList,
} from "@/config";

function Filters() {
  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof filterValidator>>({
    resolver: zodResolver(filterValidator),
    defaultValues: {
      // ! single defalut value companyName: undefined,
      ///@ts-ignore
      postType: searchParams.getAll("postType") ?? [],
      ///@ts-ignore
      companyName:
        searchParams.getAll("companyName").map((item) => ({
          value: item,
          label: item,
        })) ?? [],
      ///@ts-ignore
      jobType:
        searchParams.getAll("jobType").map((item) => ({
          value: item,
          label: item,
        })) ?? [],
      ///@ts-ignore
      jobExperience: searchParams.getAll("jobExperience").map((item, i) => experienceList[i]) ?? [],
      ///@ts-ignore
      jobRole:
        searchParams.getAll("jobRole").map((item) => ({
          value: item,
          label: item,
        })) ?? [],
      jobURL: searchParams.get("jobURL") ?? "",
      jobCode: searchParams.get("jobCode") ?? "",
      ///@ts-ignore
      jobLocationType: searchParams.getAll("jobLocationType") ?? [],
      ///@ts-ignore
      skills:
        searchParams.getAll("skills").map((item) => ({
          value: item,
          label: item,
        })) ?? [],
      //     jobCompensation: "",
    },
  });

  const pathName = usePathname();

  const router = useRouter();

  function removeQueryParam(key) {
    const urlObj = new URL(window.location.href);
    urlObj.searchParams.delete(key);
    window.history.replaceState(null, "", urlObj.toString());
  }

  useEffect(() => {
    // Watch field values
    const postType = form.watch("postType");
    const companyName = form.watch("companyName");
    const jobType = form.watch("jobType");
    const skills = form.watch("skills");
    const jobRole = form.watch("jobRole");
    const jobExperience = form.watch("jobExperience");
    const jobLocationType = form.watch("jobLocationType");
    const jobURL = form.watch("jobURL");
    const jobCode = form.watch("jobCode");

    // Create URLSearchParams instance
    const params = new URLSearchParams();

    if (Array.isArray(postType)) {
      if (postType.length === 0) removeQueryParam("postType");

      postType.forEach((data) => {
        ///@ts-ignore
        params.append("postType", data); // Append each skill for the same key
      });
    }

    // Process companyName if it's an array of objects
    if (Array.isArray(companyName)) {
      if (companyName.length === 0) removeQueryParam("companyName");

      companyName.forEach((data) => {
        ///@ts-ignore
        params.append("companyName", data.value); // Append each value for the same key
      });
    }

    if (Array.isArray(jobType)) {
      if (jobType.length === 0) removeQueryParam("jobType");

      jobType.forEach((data) => {
        ///@ts-ignore
        params.append("jobType", data.value); // Append each value for the same key
      });
    }

    if (Array.isArray(jobRole)) {
      if (jobRole.length === 0) removeQueryParam("jobRole");

      jobRole.forEach((data) => {
        ///@ts-ignore
        params.append("jobRole", data.value); // Append each value for the same key
      });
    }

    if (Array.isArray(jobExperience)) {
      if (jobExperience.length === 0) removeQueryParam("jobExperience");

      jobExperience.forEach((data) => {
        ///@ts-ignore
        params.append("jobExperience", data.value); // Append each value for the same key
      });
    }

    if (Array.isArray(skills)) {
      if (skills.length === 0) removeQueryParam("skills");

      skills.forEach((data) => {
        ///@ts-ignore
        params.append("skills", data.value); // Append each skill for the same key
      });
    }

    if (Array.isArray(jobLocationType)) {
      if (jobLocationType.length === 0) removeQueryParam("jobLocationType");

      jobLocationType.forEach((data) => {
        ///@ts-ignore
        params.append("jobLocationType", data); // Append each skill for the same key
      });
    }

    if (jobURL) {
      if (!jobURL) removeQueryParam("jobURL");
      params.append("jobURL", String(jobURL)); // Append jobLocationType
    }

    if (jobCode) {
      if (!jobCode) removeQueryParam("jobCode");
      params.append("jobCode", String(jobCode)); // Append jobExperience
    }

    // Push to the router if there are any parameters
    if (params.toString()) {
      router.push(`${pathName}?${params.toString()}`);
    }
  }, [
    form.watch("companyName"),
    form.watch("jobType"),
    form.watch("skills"),
    form.watch("postType"),
    form.watch("jobRole"),
    form.watch("jobLocationType"),
    form.watch("jobExperience"),
    form.watch("jobURL"),
    form.watch("jobCode"),
  ]);

  // async function onSubmit(value: z.infer<typeof filterValidator>) {
  //   // const { data } = useSearch(urlParams.toString());

  //   // await request.get("/search", {
  //   //   params: urlParams,
  //   // });
  //   console.log(value);
  // }

  return (
    <div className="flex flex-col">
      <div className="bg-muted font-heading flex items-center justify-center gap-2 rounded-sm px-4 py-1 text-lg">
        <ListFilter className="mb-1 h-5" /> <h6>Filters</h6>
      </div>
      <Form {...form}>
        <form className="space-y-2">
          {/* Post Type */}
          <FormField
            control={form.control}
            name="postType"
            render={() => (
              <FormItem className="my-2">
                <FormLabel>Post Type</FormLabel>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {postType.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="postType"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-center justify-center space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  // router.push(pathName + "?" + createQueryString("postType", item.label));
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(field.value?.filter((value) => value !== item.id));
                                }}
                              />
                            </FormControl>
                            <FormLabel className="mt-2 font-normal">{item.label}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormDescription className="text-center">
                  Select the type of post you want to see.
                </FormDescription>
              </FormItem>
            )}
          />
          {/* Company Name */}
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <SelectComponent
                  createAble={true}
                  isMulti={true}
                  // onChange={field.onChange}
                  options={companyList}
                  value={field.value.map((value) => ({ value, label: value }))}
                  // onInputChange={() => {
                  //   if (field.value.length === 0) removeQueryParam("companyName");
                  // }}
                  onChange={(newValue: { value: string; label: string }[] | null) => {
                    field.onChange(newValue ?? []);
                  }}
                  // ! single option value
                  // value={field.value ? { value: field.value, label: field.value } : ""}
                  // onChange={(newValue: { value: string; label: string } | "") => {
                  //   field.onChange(newValue);
                  // }}
                  placeholder="Select Company"
                  {...field}
                />
              </FormItem>
            )}
          />
          {/* Job Type */}
          <FormField
            control={form.control}
            name="jobType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Type</FormLabel>
                <SelectComponent
                  createAble={false}
                  isMulti={true}
                  options={jobTypeOptionsObj}
                  value={field.value.map((value) => ({ value, label: value }))}
                  onChange={(newValue: { value: string; label: string }[] | null) => {
                    field.onChange(newValue ?? []);
                  }}
                  // value={field.value}
                  // onChange={field.onChange}
                  placeholder="Select Job Type"
                  {...field}
                />
              </FormItem>
            )}
          />
          {/* Job Role */}
          <FormField
            control={form.control}
            name="jobRole"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Role</FormLabel>
                <SelectComponent
                  createAble={false}
                  isMulti={true}
                  options={jobRoleList}
                  value={field.value.map((value) => ({ value, label: value }))}
                  onChange={(newValue: { value: string; label: string }[] | null) => {
                    field.onChange(newValue ?? []);
                  }}
                  // value={field.value}
                  // onChange={field.onChange}
                  placeholder="Select Job Role"
                  {...field}
                />
              </FormItem>
            )}
          />
          {/* Job Experience */}
          <FormField
            control={form.control}
            name="jobExperience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work Experience</FormLabel>
                <SelectComponent
                  createAble={false}
                  isMulti={true}
                  options={experienceList}
                  // value={field.value}
                  // onChange={field.onChange}
                  value={field.value.map((value) => ({ value, label: value }))}
                  onChange={(newValue: { value: string; label: string }[] | null) => {
                    field.onChange(newValue ?? []);
                  }}
                  placeholder="Select Work Experience"
                  {...field}
                />
              </FormItem>
            )}
          />
          {/* Skills */}
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem className="my-2">
                <FormLabel>Skills</FormLabel>
                <SelectComponent
                  createAble={true}
                  isMulti={true}
                  // value={field.value}
                  // onChange={field.onChange}
                  // value={field.value.map((value) => ({ value, label: value }))}
                  // value={}
                  options={skillsList}
                  onChange={(newValue: { value: string; label: string }[] | null) => {
                    field.onChange(newValue ?? []);
                  }}
                  placeholder="Select Skills"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Job Location Type */}
          <FormField
            control={form.control}
            name="jobLocationType"
            render={() => (
              <FormItem className="my-2">
                <FormLabel>Location Type</FormLabel>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {jobLoationType.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="jobLocationType"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-center justify-center space-x-3 space-y-0">
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
                            <FormLabel className="mt-2 font-normal">{item.label}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
              </FormItem>
            )}
          />
          {/* Job URL */}
          <FormField
            control={form.control}
            name="jobURL"
            render={({ field }) => (
              <FormItem className="px-1">
                <FormLabel>Job URL</FormLabel>
                <FormControl>
                  <Input className="bg-background" placeholder="Enter Job URL" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Job Code */}
          <FormField
            control={form.control}
            name="jobCode"
            render={({ field }) => (
              <FormItem className="px-1">
                <FormLabel>Job Code</FormLabel>
                <FormControl>
                  <Input className="bg-background" placeholder="Enter Job Code" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          {/* <Button className="mx-auto rounded-full px-5" type="submit">
            <Search className="mr-1 h-5" /> Search
          </Button> */}
        </form>
      </Form>
    </div>
  );
}

export default Filters;
