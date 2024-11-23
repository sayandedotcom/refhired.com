import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import type { Applied } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import addDays from "date-fns/addDays";
import addHours from "date-fns/addHours";
import format from "date-fns/format";
import nextSaturday from "date-fns/nextSaturday";
import parse from "html-react-parser";
import {
  Archive,
  Check,
  CheckCircle2,
  Clock,
  File,
  Forward,
  MoreVertical,
  Reply,
  ReplyAll,
  Trash2,
  X,
  XCircle,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Button,
  Calendar,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@referrer/ui";

import RichTextEditor from "@/components/Tiptap";
import { DynamicIcons } from "@/components/icons/dynamic-icons";
import { Badge, TooltipDemo, sonerToast } from "@/components/ui";

import { request } from "@/lib/axios";

import { useStore } from "@/store/store";

import { TDashboardReplyRequests } from "@/types/posts";

export const replyValidator = z.object({
  message: z.string().nonempty("Message is required"),
});

export function RequestsDisplay() {
  const { data: session } = useSession();

  const displayRequest = useStore((state) => state.displayRequest);

  const { mutate, isPending } = useMutation({
    mutationKey: ["referral"],
    mutationFn: ({ status, reply }: TDashboardReplyRequests) => {
      return request.post(
        `/dashboard/requests/${displayRequest.id}`,
        {
          status,
          reply,
        },
        {
          headers: {
            Authorization: session?.user?.refresh_token && `Bearer ${session?.user?.refresh_token}`,
          },
        }
      );
    },
    onSuccess(data, variables) {
      sonerToast({
        severity: "success",
        title: "Sucess !",
        message: data.data.message,
      });
    },
    onError(error, variables, context) {
      sonerToast({
        severity: "error",
        title: "Error !",
        ///@ts-expect-error
        message: error?.response.data.message,
      });
    },
  });

  const form = useForm<z.infer<typeof replyValidator>>({
    resolver: zodResolver(replyValidator),
    defaultValues: {
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof replyValidator>, status: Applied["status"]) {
    mutate({ reply: values.message, status: status });
  }

  const today = new Date();

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Archive className="h-4 w-4" />
                <span className="sr-only">Archive</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Archive</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Archive className="h-4 w-4" />
                <span className="sr-only">Move to junk</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Move to junk</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="destructive" size="icon">
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Move to trash</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Move to trash</TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" className="mx-1 h-6" />
          <Tooltip>
            <Popover>
              <PopoverTrigger asChild>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Clock className="h-4 w-4" />
                    <span className="sr-only">Snooze</span>
                  </Button>
                </TooltipTrigger>
              </PopoverTrigger>
              <PopoverContent className="flex w-[535px] p-0">
                <div className="flex flex-col gap-2 border-r px-2 py-4">
                  <div className="px-4 text-sm font-medium">Snooze until</div>
                  <div className="grid min-w-[250px] gap-1">
                    <Button variant="ghost" className="justify-start font-normal">
                      Later today{" "}
                      <span className="text-muted-foreground ml-auto">
                        {format(addHours(today, 4), "E, h:m b")}
                      </span>
                    </Button>
                    <Button variant="ghost" className="justify-start font-normal">
                      Tomorrow
                      <span className="text-muted-foreground ml-auto">
                        {format(addDays(today, 1), "E, h:m b")}
                      </span>
                    </Button>
                    <Button variant="ghost" className="justify-start font-normal">
                      This weekend
                      <span className="text-muted-foreground ml-auto">
                        {format(nextSaturday(today), "E, h:m b")}
                      </span>
                    </Button>
                    <Button variant="ghost" className="justify-start font-normal">
                      Next week
                      <span className="text-muted-foreground ml-auto">
                        {format(addDays(today, 7), "E, h:m b")}
                      </span>
                    </Button>
                  </div>
                </div>
                <div className="p-2">
                  <Calendar />
                </div>
              </PopoverContent>
            </Popover>
            <TooltipContent>Snooze</TooltipContent>
          </Tooltip>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Reply className="h-4 w-4" />
                <span className="sr-only">Reply</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Reply</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <ReplyAll className="h-4 w-4" />
                <span className="sr-only">Reply all</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Reply all</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Forward className="h-4 w-4" />
                <span className="sr-only">Forward</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Forward</TooltipContent>
          </Tooltip>
        </div>
        <Separator orientation="vertical" className="mx-2 h-6" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Mark as unread</DropdownMenuItem>
            <DropdownMenuItem>Star thread</DropdownMenuItem>
            <DropdownMenuItem>Add label</DropdownMenuItem>
            <DropdownMenuItem>Mute thread</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Separator />
      {displayRequest ? (
        <div className="flex flex-1 flex-col">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <Image
                id="profile-picture"
                alt="img"
                src={displayRequest?.user.image ?? "/images/avatar/avatar.png"}
                width={44}
                height={44}
                className="mx-auto cursor-pointer rounded-full"
              />
              <div className="grid gap-1">
                <div className="font-semibold">{displayRequest?.user.name}</div>
                <div className="line-clamp-1 text-xs">@{displayRequest?.user.userName}</div>
                <div className="line-clamp-1 text-xs">
                  <span className="font-medium">{displayRequest?.user.email}</span>
                </div>
              </div>
            </div>
            {displayRequest?.appliedAt && (
              <div className="text-muted-foreground ml-auto text-xs">
                {format(new Date(displayRequest?.appliedAt ?? ""), "PPpp")}
              </div>
            )}
          </div>
          <Separator />
          <div>
            <div className="flex-1 whitespace-pre-wrap p-4 text-base">
              {parse(displayRequest?.applyInfo.message)}
            </div>
            <div className="flex items-center gap-2 p-4">
              <p className="font-heading text-sm">PDFs :-</p>
              {displayRequest?.applyInfo.pdfs.map((link, index) => {
                const platform = Object.keys(link)[0];
                const url = link[platform];
                return (
                  <TooltipDemo key={index} text={platform}>
                    <Link href={url} target="_blank">
                      <File />
                    </Link>
                  </TooltipDemo>
                );
              })}
            </div>
            <div className="flex items-center gap-2 p-4">
              <p className="font-heading text-sm">Links :-</p>
              {displayRequest?.applyInfo.links.map((link, index) => {
                const platform = Object.keys(link)[0];
                const url = link[platform];
                return (
                  <TooltipDemo key={index} text={platform}>
                    <Link href={url} target="_blank">
                      <DynamicIcons iconName={platform} className="h-7 w-7" />
                    </Link>
                  </TooltipDemo>
                );
              })}
            </div>
            {displayRequest?.reply && (
              <div className="bg-muted m-4 flex-1 whitespace-pre-wrap rounded-xl p-4 text-base">
                {displayRequest?.status === "Accepted" ? (
                  <Badge className="mb-2" variant="default">
                    <CheckCircle2 className="h-3" /> Accepted
                  </Badge>
                ) : (
                  <Badge className="mb-2" variant="default">
                    <XCircle className="h-3" /> Rejected
                  </Badge>
                )}
                <p>{parse(displayRequest.reply)}</p>
              </div>
            )}
          </div>
          <Separator className="mt-auto" />
          {!displayRequest.reply && (
            <form className="p-4">
              <Form {...form}>
                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">{`Send Feedback to ${displayRequest?.user.name}...`}</FormLabel>
                        <FormControl>
                          <RichTextEditor
                            charactersLimit={500}
                            className="bg-muted min-h-[80px] max-w-full text-base"
                            name="message"
                            placeholder="Write a short message to the referrer here. . . . . ."
                            value={field.value}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex items-center justify-end gap-5">
                    <Button
                      isLoading={isPending}
                      iconBefore={<Check />}
                      onClick={form.handleSubmit((data) => onSubmit(data, "Accepted"))}
                      type="submit"
                      size="sm"
                      className="text-foreground rounded-full bg-green-800 transition hover:bg-green-800 active:scale-95">
                      Accept
                    </Button>
                    <Button
                      isLoading={isPending}
                      iconBefore={<X />}
                      onClick={form.handleSubmit((data) => onSubmit(data, "Rejected"))}
                      type="submit"
                      size="sm"
                      className="bg-destructive text-foreground hover:bg-destructive rounded-full transition active:scale-95">
                      Reject
                    </Button>
                  </div>
                </div>
              </Form>
            </form>
          )}
        </div>
      ) : (
        <div className="text-muted-foreground p-8 text-center">No message selected</div>
      )}
    </div>
  );
}
