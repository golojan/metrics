export const fetcher = async (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
