import { useSelector } from "react-redux";
function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector((store) => {
    console.log(store);
    return store.account.balance;
  });
  console.log(balance);
  return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;
