
import {useAppSelector} from "../app/hooks.ts";

const Balance = () => {
    const balance = useAppSelector(state => state.balance);
    const quote = useAppSelector(state => state.quote);

    return (
        <div className={'text-center text-uppercase'}>
            <h1 className={'text-[gold] font-bold text-8xl'}>Iron Bank of Braavos</h1>
            <h3 className={'text-[whitesmoke] text-5xl'}>{quote}</h3>
            <h2 className={'text-[firebrick] text-7xl'}>Balance = {balance}</h2>
        </div>
    );
};

export default Balance;