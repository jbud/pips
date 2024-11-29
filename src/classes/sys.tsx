import Pips from "./pips";
import { useState, MouseEvent } from "react";
enum System {
    SYS,
    ENG,
    WEP,
}

interface Pip {
    SYS: number;
    ENG: number;
    WEP: number;
}

const PipDefaultState: Pip = {
    SYS: 2,
    ENG: 2,
    WEP: 2,
};

const Sys = () => {
    const [pips, setPips] = useState<Pip>(PipDefaultState);

    const movePips = (sys: System) => {
        const keys = [System.SYS, System.ENG, System.WEP];
        const filtered = keys.filter((key) => key !== sys);
        const a = System[filtered[0]] as keyof Pip;
        const b = System[filtered[1]] as keyof Pip;
        const choice = System[sys] as keyof Pip;
        if (pips[choice] < 3.5) {
            if (pips[a] > 0 && pips[b] > 0) {
                setPips((current) => {
                    return {
                        ...current,
                        [choice]: current[choice] + 1,
                        [a]: current[a] - 0.5,
                        [b]: current[b] - 0.5,
                    };
                });
            } else if (pips[a] > 0.5) {
                setPips((current) => {
                    return {
                        ...current,
                        [choice]: current[choice] + 1,
                        [a]: current[a] - 1,
                    };
                });
            } else {
                setPips((current) => {
                    return {
                        ...current,
                        [choice]: current[choice] + 1,
                        [b]: current[b] - 1,
                    };
                });
            }
        }
        if (pips[choice] === 3.5) {
            if (pips[a] > pips[b]) {
                setPips((current) => {
                    return {
                        ...current,
                        [choice]: current[choice] + 0.5,
                        [a]: current[a] - 0.5,
                    };
                });
            } else {
                setPips((current) => {
                    return {
                        ...current,
                        [choice]: current[choice] + 0.5,
                        [b]: current[b] - 0.5,
                    };
                });
            }
        }
    };
    return (
        <div>
            <div className="boxest">
                <Pips count={pips.ENG}></Pips>
                <div>&nbsp;</div>
                <div className="boxinator">
                    <Pips count={pips.SYS}></Pips>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Pips count={pips.WEP}></Pips>
                </div>
            </div>
            <div>
                <a
                    href="/#"
                    className="myButton"
                    onClick={(event: MouseEvent) => {
                        movePips(System.SYS);
                    }}
                >
                    SYS
                </a>
                |
                <a
                    href="/#"
                    className="myButton"
                    onClick={(event: MouseEvent) => {
                        movePips(System.ENG);
                    }}
                >
                    ENG
                </a>
                |
                <a
                    href="/#"
                    className="myButton"
                    onClick={(event: MouseEvent) => {
                        movePips(System.WEP);
                    }}
                >
                    WEP
                </a>
            </div>
            <div>
                <a
                    href="/#"
                    className="myButton"
                    onClick={(event: MouseEvent) => {
                        setPips(PipDefaultState);
                    }}
                >
                    RST
                </a>
            </div>
        </div>
    );
};

export default Sys;
