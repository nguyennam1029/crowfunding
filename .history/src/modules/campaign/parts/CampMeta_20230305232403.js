import React from "react";
import classNames from "utils/classNames";

const CampMeta = ({
  amountDf = "$2,000",
  text = "Raised of $1,900",
  size = "small",
  goal,
  amount,
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h4
        className={classNames(
          "font-semibold text-text2",
          size === "small" ? "text-sm" : "text-xl"
        )}
      >
        {goal || amount || amountDf}
      </h4>
      <span
        className={classNames(
          "text-text4",
          size === "small" ? "text-xs" : "text-base"
        )}
      >
        {text}
      </span>
    </div>
  );
};

export default CampMeta;
