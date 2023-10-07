import colors from '@Colors';
import { useViewportDimensions } from '@Hooks/useViewportDimensions';
import type { ReactNode } from 'react';

interface Props {
	/** Optional onClick function. Most often used when this component is being used as a background for a modal. */
	onClick?: (ev: React.MouseEvent) => void;
	/** Optional styling to apply to the div that takes over the screen. */
	style?: Record<string, unknown>;
	/** React children to render within full screen div. */
	children?: ReactNode;
}

/** Full screen takeover component. */
function FullScreen({ onClick, style, children }: Props) {
	const { width, height } = useViewportDimensions();

	return (
		<div
			onClick={(e) => {
				if (onClick) {
					e.stopPropagation();
					onClick(e);
				}
			}}
			style={{
				position: 'fixed',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				zIndex: 9999,
				backgroundColor: colors.middle,
				width,
				height,
				...style,
			}}
		>
			{children}
		</div>
	);
}

export default FullScreen;
