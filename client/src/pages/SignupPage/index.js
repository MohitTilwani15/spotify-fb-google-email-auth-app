import React from 'react';
import graphql from 'graphql';

export default [{
  path: '/signup',
  components: () => [import('../../components/Layout'), import('./SignupPage')],
  query: graphql`
		query SignupPageQuery {
			...Layout
		}
	`,
  render: ([Layout, SignUpForm], data) => ({
    title: 'Mplatform | Signup',
    component: (
			<Layout hideSidebar data={data}>
				<SignUpForm />
			</Layout>
		),
    chunks: ['Signup'], 
  }),
}]
