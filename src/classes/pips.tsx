import React from "react";

const Pips = ({ count }: { count: number }) => {
    return (
        <div className="big-Box">
            <div
                className={
                    count > 0
                        ? count >= 1
                            ? "box active"
                            : "box active-Half"
                        : "box inactive"
                }
            ></div>
            <div
                className={
                    count > 1
                        ? count >= 2
                            ? "box active"
                            : "box active-Half"
                        : "box inactive"
                }
            ></div>
            <div
                className={
                    count > 2
                        ? count >= 3
                            ? "box active"
                            : "box active-Half"
                        : "box inactive"
                }
            ></div>
            <div
                className={
                    count > 3
                        ? count === 4
                            ? "box active"
                            : "box active-Half"
                        : "box inactive"
                }
            ></div>
        </div>
    );
};

export default Pips;
