"use strict";

const Timekoto = (prop) => {
  const date = Date.now();

  if (prop === "m") {
    // Return timestamp in milliseconds
    return date;
  } else {
    // Return timestamp in seconds
    return Math.floor(date / 1000);
  }
};

module.exports = {
  Timekoto,
};
