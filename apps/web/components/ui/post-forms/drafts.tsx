"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import Loading from "@/app/loading";
import parse from "html-react-parser";
import { Pencil, Trash2 } from "lucide-react";
import { useIndexedDBStore } from "use-indexeddb";

import {
  Button,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@referrer/ui";

import { useStore } from "@/store/store";

import { Badge } from "../badge/badge";
import { sonerToast } from "../soner-toast";
import { TooltipDemo } from "../tooltip/tooltip";

export default function Drafts() {
  const { getAll, deleteByID } = useIndexedDBStore("posts");

  const [drafts, setDrafts] = useState([]); // State to store fetched drafts
  const [loading, setLoading] = useState(true); // State to track loading
  const router = useRouter();

  const setPostFromDraft = useStore((state) => state.setPostFromDraft);
  const setReferralPostFromDraft = useStore((state) => state.setReferralPostFromDraft);
  const setFindReferrerPostFromDraft = useStore((state) => state.setFindReferrerPostFromDraft);

  useEffect(() => {
    // Fetch drafts on component mount
    getAll()
      .then((fetchedDrafts) => {
        setDrafts(fetchedDrafts); // Update state with fetched drafts
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching drafts:", error);
        setLoading(false); // Stop loading in case of error
      });
  }, [getAll]); // Empty dependency array ensures this runs only once on mount

  if (loading) {
    return <Loading />;
  }

  const deleteDraft = (id) => {
    deleteByID(id).then(console.log).catch(console.error);
    sonerToast({
      severity: "success",
      title: "Sucess !",
      message: "You have sucessfully deleted all drafts",
    });
  };

  const getPostRoute = (data) => {
    switch (data.body.postType) {
      case "Referral Post":
        setReferralPostFromDraft(data);
        return "post?tab=referral";
      case "Find Referrer":
        setFindReferrerPostFromDraft(data);
        return "post?tab=find";
      default:
        setPostFromDraft(data);
        return "post?tab=post";
    }
  };

  const editPost = (data) => {
    const route = getPostRoute(data);
    router.push(route);
  };

  return (
    <Table>
      <TableCaption>A list of your recent drafts.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Post Type</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {drafts ? (
          drafts.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="w-[130px] p-2 font-medium">
                <Badge>{data.body.postType}</Badge>
              </TableCell>
              <TableCell className="w-[150px]">{data.body.updatedAt}</TableCell>
              <TableCell>
                <div className="line-clamp-3">{parse(data.body.description)}</div>
              </TableCell>
              <TableCell className="w-[100px] space-x-1 p-2">
                <Button onClick={() => deleteDraft(data.id)} size="icon" variant="destructive">
                  <TooltipDemo text={"delete"}>
                    <Trash2 />
                  </TooltipDemo>
                </Button>
                <Button onClick={() => editPost(data)} size="icon">
                  <TooltipDemo text={"Edit"}>
                    <Pencil />
                  </TooltipDemo>
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <p>No drafts have been saved yet</p>
        )}
      </TableBody>
    </Table>
  );
}
