import axios from "axios";

async function Server() {
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
  const response = await axios
    .get("http://localhost:3000/api/v1/test", {
      headers: {
        name: "Sayan De from Server Component",
      },
    })
    .then((ans) => ans.data);

  console.log("😊datadatadatadatadata", response);
  return <div>{response?.Hi}</div>;
}

export default Server;
