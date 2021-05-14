import * as React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef(
    (
        { ...otherProps }: InputProps,
        ref: React.Ref<HTMLInputElement>
    ): React.ReactElement => {
        return <input ref={ref} {...otherProps} />;
    }
);
