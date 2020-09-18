import React, { useState } from 'react';
import styled from 'styled-components';
import {
	GeistProvider,
	CssBaseline,
	Text,
	Page,
	Tabs,
	useTabs,
	Container,
	Spacer,
	Divider,
	Row,
	Col,
	Badge,
	Avatar,
} from '@geist-ui/react';

const Xawef = styled(Col) <any>`
	margin-bottom: 1rem;
`;

const App = () => {
	const { bindings } = useTabs('1');

	return (
		<GeistProvider theme={{ type: 'dark' }}>
			<CssBaseline />

			<Page size="large">
				<Page.Header>
					<Container style={{ alignItems: 'center' }}>
						<Text h1>Banur</Text>
						<Spacer inline />
						<Spacer inline />
						<Spacer inline />
					</Container>
					<Container>
						<Tabs hideDivider initialValue="1" {...bindings}>
							<Tabs.Item label="evil rabbit" value="1" />
							<Tabs.Item label="jumped" value="2" />
						</Tabs>
					</Container>
				</Page.Header>
				{/* <Divider style={{ width: '100%' }} /> */}

				<Row>
					<Col span={2}>
						<Xawef span={1} style={{ flexDirection: 'column-reverse' }}>
							{[
								'z',
								'z',
								'z',
								'z',
								'z',
								'z',
								'z',
								'z',
								'z',
								'z',
								'z',
								'z',
								'z',
								'z',
								'z',
								'z',
								'z',
								'a',
							].map((v, i) => (
								// <>
								<Badge.Anchor>
									<Badge size="mini">{v}</Badge>
									<Avatar
										isSquare
										src="https://images.unsplash.com/photo-1599145566106-fa02aafba0b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
									/>
								</Badge.Anchor>
								// </>
							))}
						</Xawef>
					</Col>
					<Col span={6}>awef</Col>
					<Col>Hello World!</Col>
				</Row>
			</Page>
		</GeistProvider>
	);
};

export default App;
