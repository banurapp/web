import React from 'react';
import { GeistProvider } from '@geist-ui/react';

export const withTheme = ({ children }: any) => (
	<GeistProvider theme={{ type: 'dark' }}>{children}</GeistProvider>
);
