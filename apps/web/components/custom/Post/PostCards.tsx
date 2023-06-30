"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiLink2, FiMessageCircle, FiShare2 } from "react-icons/fi";
import AltImage from "../../../public/avatar/avatar.png";
import { Button, Separator } from "@referrer/ui";
import { ApplyDialog, TooltipDemo, Badge, HoverCardDemo } from "../../ui";
import { useWindowSize } from "../../../lib/hooks";

const tag = [
  "1-5 Years",
  "Full Time",
  "Front-End Developer",
  "150-250k",
  "JavaScript",
  "React",
];

export const PostCard = () => {
  const [applied, setApplied] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const { width } = useWindowSize();
  return (
    <>
      <Separator />
      <div className='flex w-full gap-2 md:gap-3 p-1 md:p-4 mx-auto'>
        <div className='w-[12%]'>
          <HoverCardDemo>
            <Image
              alt='img'
              src={AltImage}
              width={64}
              height={64}
              className='rounded-full cursor-pointer'
            />
          </HoverCardDemo>
        </div>
        <div className='flex flex-col gap-2 w-[88%] md:w-full'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center text-sm md:text-base'>
              <HoverCardDemo>
                <span className='cursor-pointer'>Full Name</span>
              </HoverCardDemo>
              •
              <HoverCardDemo>
                <span className='dark:text-gray-200 font-thin cursor-pointer'>
                  @username
                </span>
              </HoverCardDemo>
              •<small>1h ago</small>
              <small className='hidden md:block'>• &nbsp; &nbsp;2d Left</small>
            </div>

            {!bookmark ? (
              <TooltipDemo text='Add to Bookmark'>
                <FaRegBookmark
                  onClick={() => setBookmark(!bookmark)}
                  className='cursor-pointer'
                />
              </TooltipDemo>
            ) : (
              <TooltipDemo text='Remove from Bookmark'>
                <FaBookmark
                  onClick={() => setBookmark(!bookmark)}
                  className='cursor-pointer'
                />
              </TooltipDemo>
            )}
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
            <Badge
              className='border dark:border-gray-200 border-black'
              variant='secondary'>
              <MapPin className='h-3' />
              Location
            </Badge>
            {tag.map(
              (item, i) =>
                (width < 1000 ? i < 1 : i < 3) && (
                  <Badge
                    className='border dark:border-gray-200 border-black'
                    variant='secondary'>
                    {item}
                  </Badge>
                )
            )}
            <Badge
              className='border dark:border-gray-200 border-black'
              variant='secondary'>
              +7
            </Badge>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-9 text-xl md:text-2xl'>
              <TooltipDemo text='Comment'>
                <FiMessageCircle className='cursor-pointer' />
              </TooltipDemo>
              <TooltipDemo text='Share'>
                <FiShare2 className='cursor-pointer' />
              </TooltipDemo>
              <TooltipDemo text='Copy Link'>
                <FiLink2 className='cursor-pointer' />
              </TooltipDemo>
            </div>
            <TooltipDemo text='Apply'>
              <ApplyDialog>
                <Button
                  disabled={applied}
                  iconBefore={
                    applied && (
                      <AiOutlineCheckCircle className='text-green-400 text-sm md:text-xl mr-1' />
                    )
                  }
                  onClick={() => setApplied(!applied)}
                  className='rounded-full h-9 w-3/12 text-sm'>
                  {applied ? "Applied" : "Apply"}
                </Button>
              </ApplyDialog>
            </TooltipDemo>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};
// (200 Applied)
