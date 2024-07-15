"use server";

const mapResponseToValuesAndLabels = (data) => ({
  value: data.name,
  label: data.name,
  iso2: data?.iso2,
});

export async function countriesList(value) {
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
