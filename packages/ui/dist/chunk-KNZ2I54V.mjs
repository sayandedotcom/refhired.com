import { a as a$1 } from './chunk-6Z3YMV3S.mjs';
import { c, a, b } from './chunk-DYNA3PMW.mjs';
import * as o from 'react';
import { Slot } from '@radix-ui/react-slot';
import { FormProvider, Controller, useFormContext } from 'react-hook-form';
import { cn } from '@referrer/lib/utils/cn';
import { jsx } from 'react/jsx-runtime';

var S=FormProvider,R=o.createContext({}),$=a$1=>{var e=c(a$1,[]);return jsx(R.Provider,{value:{name:e.name},children:jsx(Controller,a({},e))})},F=()=>{let e=o.useContext(R),a$1=o.useContext(x),{getFieldState:m,formState:i}=useFormContext(),r=m(e.name,i);if(!e)throw new Error("useFormField should be used within <FormField>");let{id:t}=a$1;return a({id:t,name:e.name,formItemId:`${t}-form-item`,formDescriptionId:`${t}-form-item-description`,formMessageId:`${t}-form-item-message`},r)},x=o.createContext({}),v=o.forwardRef((i,m)=>{var r=i,{className:e}=r,a$1=c(r,["className"]);let t=o.useId();return jsx(x.Provider,{value:{id:t},children:jsx("div",a({ref:m,className:cn("space-y-2",e)},a$1))})});v.displayName="FormItem";var g=o.forwardRef((i,m)=>{var r=i,{className:e}=r,a$2=c(r,["className"]);let{error:t,formItemId:s}=F();return jsx(a$1,a({ref:m,className:cn(t&&"text-destructive",e),htmlFor:s},a$2))});g.displayName="FormLabel";var h=o.forwardRef((m,a$1)=>{var e=c(m,[]);let{error:i,formItemId:r,formDescriptionId:t,formMessageId:s}=F();return jsx(Slot,a({ref:a$1,id:r,"aria-describedby":i?`${t} ${s}`:`${t}`,"aria-invalid":!!i},e))});h.displayName="FormControl";var L=o.forwardRef((i,m)=>{var r=i,{className:e}=r,a$1=c(r,["className"]);let{formDescriptionId:t}=F();return jsx("p",a({ref:m,id:t,className:cn("text-sm text-muted-foreground",e)},a$1))});L.displayName="FormDescription";var y=o.forwardRef((r,i)=>{var t=r,{className:e,children:a$1}=t,m=c(t,["className","children"]);let{error:s,formMessageId:C}=F(),f=s?String(s==null?void 0:s.message):a$1;return f?jsx("p",b(a({ref:i,id:C,className:cn("text-sm font-medium text-destructive",e)},m),{children:f})):null});y.displayName="FormMessage";

export { S as a, $ as b, F as c, v as d, g as e, h as f, L as g, y as h };
