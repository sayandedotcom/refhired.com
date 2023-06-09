import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { VariantProps } from 'class-variance-authority';

declare const Label: React.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: class_variance_authority_dist_types.ClassProp | undefined) => string> & React.RefAttributes<HTMLLabelElement>>;

export { Label };
