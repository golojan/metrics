export const fetcher = async (url: string) =>
  await fetch(url)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });


export const postFetcher = async (url: string,body:object) =>
  await fetch(url,{

  })
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
