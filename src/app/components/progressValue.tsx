import React from 'react';
import styles from '../page.module.css';
import MonthlyCashFlow from '../components/MonthlyCashFlow';

type Props = {
    cashValue?: number,
};

const ProgressValue = ({
    cashValue
}:Props) => {
    // --------  MAIN Render --------
    return (
        <div className={styles.progressValueContainer}>
            <div className={styles.progressValueData}>
                <h2> Monthly Cash Flow </h2>
                {/*<h1>{moneyFormatter(cashValue)}</h1>*/}
                <MonthlyCashFlow
                    MonthlyCashFlowValue = {cashValue}
                />
            </div>
        </div>
    );
};

ProgressValue.defaultProps = {
    cashValue: 0
};

export default ProgressValue;