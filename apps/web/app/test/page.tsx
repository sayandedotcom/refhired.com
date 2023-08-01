// import { useForm } from "react-hook-form";
// import { getAuthSession } from "@/app/api/auth/[...nextauth]/authOptions";

const Username = async () => {
  // const session = await getAuthSession();
  const session = null;

  console.log("session from test", session);

  // const form = useForm<z.infer<typeof userNameValidator>>({
  //   resolver: zodResolver(userNameValidator),
  //   defaultValues: {
  //     userName: "",
  //   },
  // });

  // const { register, handleSubmit, formState, setError } = form;
  // const { errors } = formState;

  // const onSubmit = async (data: z.infer<typeof userNameValidator>) => {
  //   const userNameExists = await prisma.user.findFirst({
  //     where: { userName: data.userName },
  // });
  // if (userNameExists) {
  // errors.userName = {
  //   message: "Username already exists",
  // };
  // setError("userName", {
  //   message: "Username already exists",
  // });
  // return;
  // }
  // console.log("data", data);
  // };

  return (
    // <div className="flex flex-col items-center justify-center gap-4 py-16">
    //   {session && session.user ? (
    //     <h1 className="text-center text-[30px] md:text-[50px]">You are already logged in !</h1>
    //   ) : (
    //     <>
    //       <h2 className="px-2 text-center text-[30px] md:text-[50px]">Claim your username now !</h2>
    //       <form
    //         // onSubmit={handleSubmit(onSubmit)}
    //         className="flex w-11/12 flex-col justify-center gap-4 normal-case lg:h-full lg:w-auto lg:flex-row lg:gap-6">
    //         <div className="btn-97 relative flex w-full lg:w-[1000px]">
    //           <input
    //             // {...register("userName")}
    //             placeholder="@johndoe"
    //             className="ml-[100px] h-full w-10/12 bg-inherit text-[20px] lowercase outline-none md:ml-[150px] md:text-[28px]"
    //           />
    //           <div className="absolute bottom-1 left-1 top-0 bg-slate-100">
    //             <p className="mt-4 px-1 text-[20px] md:text-[28px]">referrer.com/</p>
    //           </div>
    //           <p className="text-destructive md:text-base">{/* {errors.userName?.message} */}</p>
    //         </div>
    //         <button type="submit" className="btn-97 uppercase">
    //           Claim Username
    //         </button>
    //       </form>
    //     </>
    //   )}
    // </div>
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="font-heading text-[600px]">rh.</div>
      {/* <h1 className="font-heading text-[250px]">refhired.com</h1> */}
      {/* <h1 className="font-heading text-[250px]">Refhired.com</h1> */}
    </div>
  );
};
export default Username;
