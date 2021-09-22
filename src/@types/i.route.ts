import { ComponentType } from 'react';

export interface IRoute {
  component?: ComponentType;
  exact?: boolean;
  layout?: ComponentType;
  path: string;
  redirect?: string;
}
