import React from 'react';
import { Text } from '@geist-ui/react';
import { withTheme } from 'styled-components';
import { Subheading, Title as T, Heading } from './index';

export const Title = () => <T>Hello World!</T>;
export const Secondary = () => <Heading>Hello</Heading>;

export default {
	title: 'Typography',
	component: Text,
};
