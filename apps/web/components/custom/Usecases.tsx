"use client";

export const Usecases = () => {
  return (
    <>
      <h2 className='text-center text-[50px]'></h2>
      <section className='overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2'>
        <div className='p-8 md:p-12 lg:px-16 lg:py-24'>
          <div className='mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right'>
            <h2 className='text-2xl font-bold text-gray-900 md:text-3xl'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className='hidden text-gray-500 md:mt-4 md:block'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div className='mt-4 md:mt-8'>
              <a
                href='#'
                className='inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'>
                Get Started Today
              </a>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img
            alt='Student'
            src='https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            className='w-96 aspect-square object-cover'
          />
        </div>
      </section>
      <section className='overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2'>
        <div className='flex justify-center items-center'>
          <img
            alt='Student'
            src='https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            className='w-[400px] aspect-square object-cover'
          />
        </div>
        <div className='p-8 md:p-12 lg:px-16 lg:py-24'>
          <div className='mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right'>
            <h2 className='text-2xl font-bold text-gray-900 md:text-3xl'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className='hidden text-gray-500 md:mt-4 md:block'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div className='mt-4 md:mt-8'>
              <a
                href='#'
                className='inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'>
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
