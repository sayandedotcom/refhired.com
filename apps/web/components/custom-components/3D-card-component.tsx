"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Globe, Linkedin, Mail, Twitter } from "lucide-react";

import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeDCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card bg-muted relative h-auto w-11/12 rounded-xl border border-black/[0.1] p-6 dark:border-white/[0.2] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] md:w-full">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          Sayan De
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300">
          Founder, CEO, CTO
        </CardItem>
        <CardItem translateZ="100" className="mt-4 flex w-full flex-col gap-4 md:flex-row">
          <Image
            src="/images/pic.jpeg"
            height="1000"
            width="1000"
            className="h-56 cursor-pointer rounded-xl object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          <div className="font-sans font-bold">
            <p className="font-semibold">
              Sayan De is a passionate developer from India dedicated to building innovative, problem-solving
              products. He is currently pursuing a Master&apos;s in Computer Science and has expertise in
              full-stack development, DevOps, and cloud computing (AWS). With prior experience as a Founding
              Full-Stack Developer at a seed-funded startup, Sayan has participated in numerous hackathons.
              Now, he aims to leverage his skills and experience to contribute positively to society. He is
              also excited about making this project open-source in near future.
            </p>
            <Link
              className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent underline"
              target="_blank"
              href="https://medium.com/@sayandedotcom/a-side-hustle-that-boosted-my-career-skills-confidence-knowledge-etc-50765f02dcdb">
              To know More Click here -&gt;
            </Link>
          </div>
        </CardItem>
        <div className="mt-6 flex items-center justify-center gap-5">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://www.linkedin.com/in/sayande/"
            target="__blank"
            className="bg-background rounded-xl px-2 py-2 text-xs font-bold">
            <Linkedin />
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://x.com/sayandedotcom"
            target="__blank"
            className="bg-background rounded-xl px-2 py-2 text-xs font-bold">
            <Twitter />
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://www.sayande.com/"
            target="__blank"
            className="bg-background rounded-xl px-2 py-2 text-xs font-bold">
            <Globe />
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=sayandeten@gmail.com"
            target="__blank"
            className="bg-background rounded-xl px-2 py-2 text-xs font-bold">
            <Mail />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
