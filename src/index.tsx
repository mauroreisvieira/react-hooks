import * as React from 'react';
import ReactDOM from 'react-dom';

import { Input } from './components/input';
import Counter from './counter';

const App = (): React.ReactElement => {
    const [text, setText] = React.useState<string>('');
    const [, setCount] = React.useState<number | undefined>(undefined);

    const handleChange = React.useCallback((value): void => {
        setCount(value)
    }, [setCount]);

    return (
        <>
            <div>
                <Counter onChange={handleChange}/>
            </div>

            <div>
                <Input
                    value={text}
                    onChange={(event): void => setText(event.target.value)} />
            </div>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
