---
to: src/components/<%= h.changeCase.pascalCase(name)  %>/<%= h.changeCase.pascalCase(name)  %>.tsx
---
import './<%= h.changeCase.camelCase(name) %>.scss';

export type <%= h.changeCase.pascalCase(name) %>Props = {}

export const <%= h.changeCase.pascalCase(name) %> = (prop: <%= h.changeCase.pascalCase(name) %>Props) => {
  return (
    <div></div>
  );
}
