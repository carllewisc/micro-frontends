import { useState } from "react";

// components
import Card from "./Card";

// styles
import { Button } from "./../styles";

const URL_API = "https://rickandmortyapi.com/api/character";

export default function List({messages}) {
  const [state, setState] = useState({
    loading: false,
    data: [],
    error: null,
  });

  const loadItems = () => {
    fetch(URL_API)
      .then((res) => res.json())
      .then((res) => {
        setState((prevState) => ({
          ...prevState,
          data: res.results,
        }));
      })
      .catch((err) => {
        setState((prevState) => ({
          ...prevState,
          error: err,
        }));
      })
      .finally(() => {
        setState((prevState) => ({
          ...prevState,
          loading: false,
        }));
      });
  };

  if (state.loading) return <p>Loading...</p>;

  return (
    <>
      <Button onClick={loadItems}>{messages['Components'].titleLoadItems}</Button>
      
      {state.loading ? (
        <p>Data is currently loading...</p>
      ) : state.error ? (
        <p>There was an issue loading the articles.</p>
      ) : (
        state.data.map((item) => (
          <Card key={item.id} item={item} />
        ))
      )}
    </>
  );
}
