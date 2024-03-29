import { cva } from 'class-variance-authority';
import { cn } from '../utils';

export const typographyVariants = cva('', {
	variants: {
		presets: {
			h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight text-white lg:text-5xl',
			h2: 'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight text-white transition-colors first:mt-0',
			h3: 'scroll-m-20 text-2xl font-semibold tracking-tight text-white',
			h4: 'scroll-m-20 text-xl font-semibold tracking-tight text-white',
			h5: 'scroll-m-20 text-lg font-semibold tracking-tight text-white',
			p: 'leading-7 text-white [&:not(:first-child)]:mt-6',
			span: 'leading-7 text-white',
		},
	},
});

type HeadingProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLHeadingElement>,
	HTMLHeadingElement
> & { preset?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' };

export const H1 = (props: HeadingProps) => {
	return (
		<h1
			{...props}
			className={cn(
				typographyVariants({ presets: props.preset ?? 'h1' }),
				props.className,
			)}
		/>
	);
};

export const H2 = (props: HeadingProps) => {
	return (
		<h2
			{...props}
			className={cn(
				typographyVariants({ presets: props.preset ?? 'h2' }),
				props.className,
			)}
		/>
	);
};
export const H3 = (props: HeadingProps) => {
	return (
		<h3
			{...props}
			className={cn(
				typographyVariants({ presets: props.preset ?? 'h3' }),
				props.className,
			)}
		/>
	);
};
export const H4 = (props: HeadingProps) => {
	return (
		<h4
			{...props}
			className={cn(
				typographyVariants({ presets: props.preset ?? 'h4' }),
				props.className,
			)}
		/>
	);
};
export const H5 = (props: HeadingProps) => {
	return (
		<h5
			{...props}
			className={cn(
				typographyVariants({ presets: props.preset ?? 'h5' }),
				props.className,
			)}
		/>
	);
};

type PProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLParagraphElement>,
	HTMLParagraphElement
>;

export const P = (props: PProps) => {
	return (
		<p {...props} className={cn('leading-7 text-white', props.className)} />
	);
};
export const Span = (
	props: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	>,
) => {
	return (
		<span {...props} className={cn('leading-7 text-white', props.className)} />
	);
};

export const BlockQuote = (
	props: React.DetailedHTMLProps<
		React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
		HTMLQuoteElement
	>,
) => {
	return (
		<blockquote
			{...props}
			className={cn('mt-6 border-l-2 pl-6 italic text-white', props.className)}
		/>
	);
};
