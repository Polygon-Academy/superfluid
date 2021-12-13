import BigNumber from "bignumber.js";


export const fUSDC_address = "0xbe49ac1EadAc65dccf204D4Df81d650B50122aB2";
export const fUSDCx_address = "0x42bb40bF79730451B11f6De1CbA222F17b87Afd7";

export function calculateFlowRate(amount) {
    let fr = amount / (86400 * 30)
    return Math.floor(fr);
}

export function calculateStream(flowRate) {
    const stream = new BigNumber(flowRate * (86400 * 30)).shiftedBy(-18);
    return stream.toFixed(2);
}

export function calculateEndDate(bal, outflow) {
    let t = Number(bal) / (Number(outflow) * -1);
    let secondsLeft = t * 86400 * 30;
    let end = new Date(Date.now() + (secondsLeft * 1000));
    let endDay = end.toLocaleString();
    return endDay;
}

export function calculateStreamPerSecond(amount) {
    let streamSecond = amount / (86400 * 30);
    return streamSecond;
}