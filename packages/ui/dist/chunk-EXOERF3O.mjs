import { c, b as b$1, a } from './chunk-DYNA3PMW.mjs';
import * as n from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@referrer/lib/utils/cn';
import { jsx } from 'react/jsx-runtime';

var b=cva("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"underline-offset-4 hover:underline text-primary"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-3 rounded-md",lg:"h-11 px-8 rounded-md"}},defaultVariants:{variant:"default",size:"default"}}),g=n.forwardRef((h,f)=>{var e=h,{children:i,className:a$1,variant:s,size:d,asChild:u=!1}=e,c$1=c(e,["children","className","variant","size","asChild"]);return jsx(u?Slot:"button",b$1(a({className:cn(b({variant:s,size:d,className:a$1})),ref:f},c$1),{children:i}))});g.displayName="Button";

export { b as a, g as b };
