import React, { Fragment } from 'react';
import styled from 'styled-components';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { configureIcons } from 'config';
import Icon from './Icon';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    name: {
      control: 'text',
      description: 'icon key from icons config',
    },
    size: {
      control: 'text',
      description: 'icon size',
      defaultValue: '1.2rem',
      table: {
        defaultValue: { summary: '1.2rem' },
      },
    },
    color: {
      control: 'text',
      description: 'icon color',
      defaultValue: 'inherit',
      table: {
        defaultValue: { summary: 'inherit' },
      },
    },
    hoverColor: {
      control: 'text',
      description:
        'icon color on hover (if not specified hoverColor remains the same as color)',
    },
    cursor: {
      control: 'text',
      description: 'cursor type',
      defaultValue: 'inherit',
      table: {
        defaultValue: { summary: 'inherit' },
      },
    },
    className: {
      control: 'text',
      description: 'icon className',
    },
  },
  decorators: [withPropsTable],
  parameters: {
    props: {
      propTablesInclude: [Icon],
    },
  },
};

const iconsConfig = {
  search: {
    viewBox: '0 0 19 20',
    content: (
      <Fragment>
        <path
          d="M12 12.5L18.0001 18.364"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M13.7025 7.5C13.7025 11.1088 10.8401 14 7.35124 14C3.86234 14 1 11.1088 1 7.5C1 3.89117 3.86234 1 7.35124 1C10.8401 1 13.7025 3.89117 13.7025 7.5Z"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </Fragment>
    ),
  },
  add: {
    viewBox: '0 0 12 12',
    content: (
      <Fragment>
        <rect x="5" width="2" height="12" rx="1" fill="currentColor" />
        <rect
          y="7"
          width="2"
          height="12"
          rx="1"
          transform="rotate(-90 0 7)"
          fill="currentColor"
        />
      </Fragment>
    ),
  },
  table: {
    viewBox: '0 0 16 16',
    content: (
      <Fragment>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.2 1.6H1.6V4.8H7.2V1.6ZM1.6 0C0.716344 0 0 0.716344 0 1.6V5.6C0 6.04183 0.358172 6.4 0.8 6.4H8C8.44183 6.4 8.8 6.04183 8.8 5.6V0.8C8.8 0.358172 8.44183 0 8 0H1.6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.79922 1.6V4.8H14.3992V1.6H8.79922ZM7.99922 0C7.55739 0 7.19922 0.358172 7.19922 0.8V5.6C7.19922 6.04183 7.55739 6.4 7.99922 6.4H15.1992C15.641 6.4 15.9992 6.04183 15.9992 5.6V1.6C15.9992 0.716344 15.2829 0 14.3992 0H7.99922Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.6 6.4V9.6H7.2V6.4H1.6ZM0.8 4.8C0.358172 4.8 0 5.15818 0 5.6V10.4C0 10.8418 0.358172 11.2 0.8 11.2H8C8.44183 11.2 8.8 10.8418 8.8 10.4V5.6C8.8 5.15818 8.44183 4.8 8 4.8H0.8Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.6 11.2V14.4H7.2V11.2H1.6ZM0.8 9.60001C0.358172 9.60001 0 9.95818 0 10.4V14.4C0 15.2837 0.716344 16 1.6 16H8C8.44183 16 8.8 15.6418 8.8 15.2V10.4C8.8 9.95818 8.44183 9.60001 8 9.60001H0.8Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.79922 6.4V9.6H14.3992V6.4H8.79922ZM7.99922 4.8C7.55739 4.8 7.19922 5.15818 7.19922 5.6V10.4C7.19922 10.8418 7.55739 11.2 7.99922 11.2H15.1992C15.641 11.2 15.9992 10.8418 15.9992 10.4V5.6C15.9992 5.15818 15.641 4.8 15.1992 4.8H7.99922Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.79922 11.2V14.4H14.3992V11.2H8.79922ZM7.99922 9.60001C7.55739 9.60001 7.19922 9.95818 7.19922 10.4V15.2C7.19922 15.6418 7.55739 16 7.99922 16H14.3992C15.2829 16 15.9992 15.2837 15.9992 14.4V10.4C15.9992 9.95818 15.641 9.60001 15.1992 9.60001H7.99922Z"
          fill="currentColor"
        />
      </Fragment>
    ),
  },
};

configureIcons(iconsConfig);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export function playground(props) {
  return (
    <Container>
      <span>
        Configured icons for this playground:{' '}
        {Object.keys(iconsConfig).join(', ')}
      </span>
      <Icon {...props} />
    </Container>
  );
}

playground.args = {
  name: Object.keys(iconsConfig)[0],
  size: '2rem',
  color: '#B4B4B4',
  hoverColor: '#A569ED',
  cursor: 'pointer',
};
