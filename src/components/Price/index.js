import "./style.scss";

const Price = ({ amount, className }) => (
  <p className={ `price ${className}`}> 
    $ {amount.toLocaleString('es-AR',{ minimumFractionDigits: 2 })}
  </p>
);

export default Price;
