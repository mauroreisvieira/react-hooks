import * as React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

// eslint-disable-next-line react/display-name
export const Button = React.forwardRef(
    (
        { children, ...otherProps }: ButtonProps,
        ref: React.Ref<HTMLButtonElement>
    ): React.ReactElement => {
        return (
            <button ref={ref} {...otherProps}>
                { children }
            </button>
        );
    }
);
