import tw from "tailwind-styled-components";

export const Container = tw.div`
  flex
  items-center
  justify-center
  flex-col
`;

export const Button = tw.button`
  inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out
  mb-5
`;

export const Card = tw.div`
  max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mb-5
`;

export const CardImage = tw.img`
  h-60 w-full object-cover
`;

export const CardBody = tw.div`
  p-4
`;

export const CardDescription = tw.p`
  text-medium text-gray-700
`;
