import * as React from 'react';

export interface IconProps {
    /**
     * icon key from icons config
     */
    name: string;
    /**
     * icon size
     * @default '1.2rem'
     */
    size?: string;
    /**
     * icon color
     * @default inherit
     */
    color?: string;
    /**
     * icon color on hover (if not specified hoverColor remains the same as color)
     */
    hoverColor?: string;
    /**
     * cursor type
     * @default inherit
     */
    cursor?: string;
    /**
     * icon className
     */
    className?: string;
}

export default class Icon extends React.Component<IconProps> {}

interface IconConfig {
    viewBox: string;
    content: React.ReactNode;
}

export const configureIcons: (customIcons: { [key: string]: IconConfig }) => object;