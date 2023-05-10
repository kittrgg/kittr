import { createElement } from 'react';
import { Carat } from './Carat';
import { Pencil } from './Pencil';

export type SVGType = keyof typeof SVG;

export const SVG = {
  Carat,
  Pencil,
};

export default SVG;

interface SVGByTypeProps {
  type: SVGType;
  colorHover?: string;
}

/** Use an SVG by specifying which one you want. You must pass a "type" prop! */
export const SvgByType = ({
  type,
  ...props
}: React.AllHTMLAttributes<any> & SVGByTypeProps) => {
  return createElement(SVG[type], props);
};
