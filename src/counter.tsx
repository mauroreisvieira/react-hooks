import * as React from 'react';
import { Button } from './components/button';
import { Input } from './components/input';

interface CounterProps {
    onChange?: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({ onChange }: CounterProps): React.ReactElement => {
    const MIN_COUNT = 2;
    const MAX_COUNT = 99;
    const [count, setCount] = React.useState<number>(MIN_COUNT);
    const render = React.useRef(0);

    console.log('Nº Counter:', count);
    console.log('Render Counter:', render.current++);

    const decrement = (): void => {
        setCount(count - 1);
        if (onChange) onChange(count - 1);
    };

    const increment = (): void => {
        setCount(count + 1);
        if (onChange) onChange(count + 1);
    };

    return (
        <>
            <Button
                onClick={decrement}
                disabled={count === MIN_COUNT}>
                -
            </Button>
            <Input value={count} readOnly />
            <Button
                onClick={increment}
                disabled={count === MAX_COUNT}>
                +
            </Button>
        </>
    );
};

export default React.memo(Counter);
