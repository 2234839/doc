export namespace AJAX {
  export function post(options: { url: string; data: unknown }) {
    return fetch(options.url, {
      method: "POST",
      body: JSON.stringify(options.data),
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
