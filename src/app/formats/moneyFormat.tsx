export default function moneyFormatter(cashAmount : number | undefined) {
    // Check if the input is a valid number

    let cashAsString = cashAmount+'';

    // Convert the number to a string with 2 decimal places
    const formattedAmount = parseFloat(cashAsString).toFixed(2);

    // Add commas to separate thousands
    const parts = formattedAmount.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Add a dollar sign at the start and join the parts back together
    return "$" + parts.join(".");
}