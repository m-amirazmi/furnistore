export const numberWithCommas = (x: string) => x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
