function QueryCashFlowStatus(MonthlyCashFlowValue: number) {
    // Fetch full cashflow status and return here - todo
    if (MonthlyCashFlowValue < 0) {
        return 'Negative'
    }
    if (MonthlyCashFlowValue == 0) {
        return 'Neutral'
    }
  
    return 'Positive';
}

export default QueryCashFlowStatus;