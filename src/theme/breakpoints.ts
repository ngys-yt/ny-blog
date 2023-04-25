export type Breakpoint = keyof typeof breakpoints;

const breakpoints = {
  mobile: 568,
  tablet: 768,
  desktop: 1024,
};

export default breakpoints;
