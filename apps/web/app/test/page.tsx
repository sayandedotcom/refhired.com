// import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getAuthSession } from "@/app/api/auth/[...nextauth]/authOptions";
import { z } from "zod";
import { userNameValidator } from "@/lib/validators";
import prisma from "@referrer/prisma";

const Username = async () => {
  const session = await getAuthSession();

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
    <div className='flex flex-col justify-center items-center gap-4 py-16'>
      {session && session.user ? (
        <h1 className='text-center text-[30px] md:text-[50px]'>
          You are already logged in !
        </h1>
      ) : (
        <>
          <h2 className='text-center px-2 text-[30px] md:text-[50px]'>
            Claim your username now !
          </h2>
          <form
            // onSubmit={handleSubmit(onSubmit)}
            className='w-11/12 lg:h-full lg:w-auto flex flex-col lg:flex-row gap-4 justify-center lg:gap-6 normal-case'>
            <div className='flex btn-97 relative w-full lg:w-[1000px]'>
              <input
                // {...register("userName")}
                placeholder='@johndoe'
                className='lowercase outline-none h-full w-10/12 text-[20px] md:text-[28px] bg-inherit ml-[100px] md:ml-[150px]'
              />
              <div className='top-0 bottom-1 left-1 absolute bg-slate-100'>
                <p className='mt-4 px-1 text-[20px] md:text-[28px]'>
                  referrer.com/
                </p>
              </div>
              <p className='text-destructive md:text-base'>
                {/* {errors.userName?.message} */}
              </p>
            </div>
            <button type='submit' className='btn-97 uppercase'>
              Claim Username
            </button>
          </form>
        </>
      )}
    </div>
  );
};
export default Username;
