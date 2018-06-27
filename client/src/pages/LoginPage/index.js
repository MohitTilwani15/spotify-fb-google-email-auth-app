import React from 'react';
import graphql from 'graphql';

export default [{
  path: '/login',
  components: () => [import('../../components/Layout'), import('./LoginPage')],
  query: graphql`
		query LoginPageQuery {
			...Layout
		}
	`,
  render: ([Layout, LoginPage], data) => ({
    title: 'Mplatform | Login',
    component: (
			<Layout hideSidebar data={data}>
				<LoginPage />
			</Layout>
		),
    chunks: ['Login'], 
  }),
}]
