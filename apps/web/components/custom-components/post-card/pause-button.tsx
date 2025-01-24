import { useEffect, useState } from "react";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

import { Switch } from "@referrer/ui";

import { TooltipDemo, sonerToast } from "@/components/ui";

import { request } from "@/lib/axios";

export const PauseButton = ({ postId, isPause }) => {
  const { data: session } = useSession();
  const [state, setstate] = useState<boolean>(isPause);

  const { mutate, variables } = useMutation({
    mutationKey: ["pause"],
    mutationFn: ({ postId, pause }: { postId: string; pause: boolean }) => {
      return request.post("/posts/pause", null, {
        params: {
          postId,
          pause,
        },
        headers: {
          Authorization: session?.user?.refresh_token && `Bearer ${session?.user?.refresh_token}`,
        },
      });
    },
    onSuccess(data) {
      sonerToast({
        severity: "success",
        title: "Sucess !",
        message: data.data.message,
      });
    },
    onError(error) {
      if (axios.isAxiosError(error) && error?.response.status === 401) {
        sonerToast({
          severity: "error",
          title: "Error !",
          message: error?.response.data.message,
        });
      }
    },
  });

  useEffect(() => {
    setstate(variables?.pause);
  }, [variables?.pause]);

  return (
    <TooltipDemo text={state ? "Resume accepting requests" : "Pause accepting requests"}>
      <div className="pt-1">
        <Switch
          onCheckedChange={() => mutate({ postId: postId, pause: !isPause })}
          className="my-auto"
          checked={state ?? isPause}
        />
      </div>
    </TooltipDemo>
  );
};
