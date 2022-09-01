import tw from "tailwind-styled-components";

export const Title = tw.p`
  font-medium leading-tight text-4xl text-center mb-2 text-blue-600
`;

export const Container = tw.div`
  container m-auto px-6 md:px-12 xl:px-0
`

export const Grid = tw.div`
  mx-auto grid gap-6 md:grid-cols-2 flex
`

export const Column = tw.div`
  w-1/2 w-full
`