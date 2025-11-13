import dayjs from "dayjs";
import React from "react";

function DeliveryDate({selectedDeliveryOption}) {
  return (
    <div className="delivery-date">
      Delivery date:
      {dayjs(selectedDeliveryOption?.estimatedDeliveryTimeMs).format(
        "dddd, MMMM D"
      )}
    </div>
  );
}

export default DeliveryDate;
