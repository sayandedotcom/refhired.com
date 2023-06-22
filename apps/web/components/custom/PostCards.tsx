"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  MapPin,
  MessageCircle,
  MoreHorizontal,
  Share,
} from "lucide-react";
import AltImage from "../../public/avatar/avatar.png";
import { Button, Separator } from "@referrer/ui";
import { DropdownMenuDemo, TooltipDemo } from "../ui";
import { HoverCardDemo } from "../ui/HoverCard";
import { Badge } from "../ui/Badge";

export const PostCard = () => {
  const [applied, setApplied] = useState(false);
  return (
    <>
      <Separator />
      <div className='flex w-full gap-3 max-w-2xl p-4 mx-auto'>
        <div className='w-3/12'>
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
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <HoverCardDemo>
                <span className='cursor-pointer'>Full Name</span>
              </HoverCardDemo>
              •
              <HoverCardDemo>
                <span className='dark:text-gray-200 font-thin cursor-pointer'>
                  @username
                </span>
              </HoverCardDemo>
              •<small>1h ago</small>•<small>2d Left</small>
            </div>
            <DropdownMenuDemo>
              <TooltipDemo text='More'>
                <MoreHorizontal className='cursor-pointer' />
              </TooltipDemo>
            </DropdownMenuDemo>
          </div>
          <div>
            <p className='font-[5]'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
              beatae vitae repellendus saepe laudantium totam asperiores, nisi,
              repudiandae hic tenetur porro dolore consequuntur est. Beatae ipsa
              nesciunt itaque expedita tempora?
            </p>
          </div>
          <div className='flex gap-1'>
            <Badge variant='secondary'>
              <MapPin className='h-4' /> Location
            </Badge>
            <Badge variant='secondary'>Front-End Developer</Badge>
            <Badge variant='secondary'>1 - 5+ Years</Badge>
            <Badge variant='secondary'>Full Time</Badge>
            <Badge variant='secondary'>150 - 250+ k</Badge>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-9'>
              <TooltipDemo text='Comment'>
                <MessageCircle className='cursor-pointer' />
              </TooltipDemo>
              <TooltipDemo text='Share'>
                <Share className='cursor-pointer' />
              </TooltipDemo>
            </div>

            <TooltipDemo text='Apply'>
              <Button
                iconBefore={
                  applied && <CheckCircle2 className='text-green-400' />
                }
                onClick={() => setApplied(!applied)}
                className='rounded-full'>
                {applied ? "Applied" : "Apply (200 Applied)"}
              </Button>
            </TooltipDemo>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};
