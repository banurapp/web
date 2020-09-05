import React from 'react';
import { Text } from '@geist-ui/react';

console.log('hi');
export const Title: React.FC = ({ children, ...props }) => (
	<Text h1 {...props}>
		{children}
	</Text>
);

export const Heading: React.FC = ({ children, ...props }) => (
	<Text h2 {...props}>
		{children}
	</Text>
);

export const Subheading: React.FC = ({ children, ...props }) => (
	<Text h3 {...props}>
		{children}
	</Text>
);

export const Paragraph: React.FC = ({ children, ...props }) => (
	<Text {...props}>{children}</Text>
);
