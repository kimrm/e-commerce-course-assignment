import { PriceStyle, DiscountStyle } from "./index.styles";

interface PriceTagProps {
  price: number;
  discount?: number;
}

function DiscountTag(price: number, discount: number) {
  function calculateDiscountPercentage(price: number, discount: number) {
    return Math.round((discount / price) * 100);
  }
  return (
    <DiscountStyle>
      {calculateDiscountPercentage(price, discount)}% discount
    </DiscountStyle>
  );
}

export default function index({ price, discount }: PriceTagProps) {
  const displayedPrice = discount ? discount : price;
  const discountedAmount = discount ? price - discount : 0;

  return (
    <div>
      <PriceStyle>{displayedPrice}</PriceStyle>

      {discountedAmount > 0 && DiscountTag(price, discountedAmount)}
    </div>
  );
}
