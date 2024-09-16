// export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";
// import { requests } from "@/lib/axios";
import { request } from "@/lib/axios";

async function getTest() {
  const response = await request.get("/test");

  return response.data;
}

export default async function Server() {
  const response = (await request.get("/test")).data;
  // const response = await fetch("http://localhost:3000/api/v1/test", {
  //   method: "GET",
  // }).then((ans) => ans.json());
  // .get("/api/v1/test", {
  //   headers: {
  //     name: "Sayan De from Server Component",
  //   },
  // })
  // .then((ans) => ans.data);

  // console.log("😊datadatadatadatadata", response);
  return (
    <div>
      hi
      {response?.Hi}
    </div>
  );
}

// const queryClient = new QueryClient();
// await queryClient.prefetchQuery({
//   queryKey: ["test"],
//   queryFn: () => {
//     return axios.get("http://localhost:3000/api/v1/test", {
//       headers: {
//         name: "Sayan De from Client Component",
//       },
//     });
//   },
// });
// const { data, error, isLoading } = useQuery({
//   queryKey: ["test"],
//   queryFn: () => {
//     return axios.get("http://localhost:3000/api/v1/test", {
//       headers: {
//         name: "Sayan De from Client Component",
//       },
//     });
//   },
// });
// console.log("😊datadatadatadatadata",data);
