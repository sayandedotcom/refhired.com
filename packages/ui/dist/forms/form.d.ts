import * as _radix_ui_react_slot from '@radix-ui/react-slot';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react_hook_form from 'react-hook-form';
import { FieldValues, ControllerProps } from 'react-hook-form';
import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues extends FieldValues | undefined = undefined>(props: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends react_hook_form.Path<TFieldValues> = react_hook_form.Path<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => react_jsx_runtime.JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    error?: react_hook_form.FieldError | undefined;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare const FormItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const FormLabel: React.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & React.RefAttributes<HTMLLabelElement>>;
declare const FormControl: React.ForwardRefExoticComponent<Omit<_radix_ui_react_slot.SlotProps & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLElement>>;
declare const FormDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const FormMessage: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;

export { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField };
