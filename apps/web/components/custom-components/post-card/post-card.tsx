import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import AltImage from "../../../public/avatar/avatar.png";
import { Separator } from "@referrer/ui";
import { PostHoverCard } from "@/components/ui";
import { ApplyButton, MultipleButtons, Tags } from "./post-buttons";
import { ComboboxDropdownMenu } from "./post-more-menu";

const tag = [
  "1-5 Years",
  "Full Time",
  "Front-End Developer",
  "150-250k",
  "JavaScript",
  "React",
];

export const PostCard = () => {
  return (
    <>
      <Separator />
      <div className='flex w-full gap-2 md:gap-3 p-1 md:p-4 mx-auto'>
        <div className='w-[12%]'>
          <PostHoverCard>
            <Image
              alt='img'
              src={AltImage}
              width={64}
              height={64}
              className='rounded-full cursor-pointer'
            />
          </PostHoverCard>
        </div>
        <div className='flex flex-col gap-2 w-[88%] md:w-full'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center text-sm md:text-base'>
              <PostHoverCard>
                <span className='cursor-pointer'>Full Name</span>
              </PostHoverCard>
              •
              <PostHoverCard>
                <span className='dark:text-gray-200 font-thin cursor-pointer'>
                  @username
                </span>
              </PostHoverCard>
              •<small>1h ago</small>
              <small className='hidden md:block'>• &nbsp; &nbsp;2d Left</small>
            </div>
            <ComboboxDropdownMenu>
              <div className='cursor-pointer rounded-full hover:bg-muted'>
                <MoreHorizontal className='w-5' />
              </div>
            </ComboboxDropdownMenu>
          </div>
          <p className='text-[15px] md:text-base cursor-pointer'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
            beatae vitae repellendus saepe laudantium totam asperiores, nisi,
            repudiandae hic tenetur porro dolore consequuntur est. Beatae ipsa
            nesciunt itaque expedita tempora?
            <span className='float-right text-xs md:text-sm'>
              ....Show more
            </span>
          </p>
          <div className='flex gap-1 h-5'>
            <Tags tag={tag} />
          </div>
          <div className='flex items-center justify-between'>
            <MultipleButtons />
            <ApplyButton />
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};
// (200 Applied)
