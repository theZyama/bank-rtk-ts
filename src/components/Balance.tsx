import {useSelector} from "react-redux";
import {RootState} from "../app/store.ts";

const Balance = () => {
    const balance = useSelector<RootState, number>(state => state.balance);
    const quote = useSelector<RootState, string>(state => state.quote);

    return (
        <div className={'text-center text-uppercase'}>
            <h1 className={'text-[gold] font-bold text-8xl'}>Iron Bank of Braavos</h1>
            <h3 className={'text-[whitesmoke] text-5xl'}>{quote}</h3>
            <h2 className={'text-[firebrick] text-7xl'}>Balance = {balance}</h2>
        </div>
    );
};

export default Balance;