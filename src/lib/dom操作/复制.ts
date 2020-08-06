export const copy = (str: string) => {
  const input = document.createElement("textarea");
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.value = str;
  input.select();
  const r = document.execCommand("copy");
  input.remove();
  return r;
};
