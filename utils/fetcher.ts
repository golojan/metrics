export const fetcher = async (url: string) =>
  await fetch(url)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });


export const postFetcher = async ({url: string,body:object}:any) =>
  await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
