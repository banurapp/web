import React from 'react'
import { Page } from '@geist-ui/react'

export type AppLayoutProps = {}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
	<Page size="medium">{children}</Page>
)

export default AppLayout
