export const html = (strings: TemplateStringsArray, ...values: any[]) =>
  String.raw({ raw: strings }, ...values);

export const ul = (items: string[]) => html`
  <ul>
    ${items.map((item) => html`<li>${item}</li>`).join("")}
  </ul>
`;

export const ol = (items: string[]) => html`
  <ol>
    ${items.map((item) => html`<li>${item}</li>`).join("")}
  </ol>
`;

export const img = (
  src: string,
  alt: string,
  width?: string,
  height?: string
) => html`
  <img
    src="${src}"
    alt="${alt}"
    ${width ? `width="${width}"` : ""}
    ${height ? `height="${height}"` : ""}
  />
`;

export const p = (content: string) => html`<p>${content}</p>`;

export const strong = (content: string) => html`<strong>${content}</strong>`;
