import { c, b, a } from './chunk-DYNA3PMW.mjs';
import * as n from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@referrer/lib/utils/cn';
import { jsxs } from 'react/jsx-runtime';

var v=cva("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"underline-offset-4 hover:underline text-primary"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-3 rounded-md",lg:"h-11 px-8 rounded-md"}},defaultVariants:{variant:"default",size:"default"}}),h=n.forwardRef((y,m)=>{var e=y,{children:i,iconBefore:a$1,iconAfter:s,className:c$1,variant:d,size:u,asChild:f=!1}=e,l=c(e,["children","iconBefore","iconAfter","className","variant","size","asChild"]);return jsxs(f?Slot:"button",b(a({className:cn(v({variant:d,size:u,className:c$1})),ref:m},l),{children:[a$1,i,s]}))});h.displayName="Button";

export { v as a, h as b };
