async function getTest() {
  const response = await fetch("http://localhost:3000/api/v1/test", {
    method: "GET",
  });

  return response.json();
}

export default async function Server() {
  const response = await getTest();
  // const response = await fetch("http://localhost:3000/api/v1/test", {
  //   method: "GET",
  // }).then((ans) => ans.json());
  // .get("/api/v1/test", {
  //   headers: {
  //     name: "Sayan De from Server Component",
  //   },
  // })
  // .then((ans) => ans.data);

  console.log("😊datadatadatadatadata", response);
  return (
    <div>
      HI
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
