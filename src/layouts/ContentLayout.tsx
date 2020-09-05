import React from 'react'
import { Page } from '@geist-ui/react'

export type ContentLayoutProps = {}

const ContentLayout: React.FC<ContentLayoutProps> = ({
	children,
	...props
}) => <Page size="large">{children}</Page>

export default ContentLayout
