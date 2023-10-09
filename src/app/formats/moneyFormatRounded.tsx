export default function moneyFormatterRounded(cashAmount : number | undefined) {
    let cashAsString = cashAmount + '';

    // Convert the number to a string with 2 decimal places
    const formattedAmount = parseFloat(cashAsString).toFixed(0);

    // Add commas to separate thousands
    const parts = formattedAmount.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Add a dollar sign at the start and join the parts back together
    return "$" + parts.join(".");
}