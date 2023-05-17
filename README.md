<h1>
    <a href="https://unified.to"><img src="https://unified.to/images/logo.png" /></a>
</h1>

# Unified.to's Integrations Directory Typescript VueJS Component

## Installing

### Package manager

Using NPM:

```bash
$ npm install @unified-api/vuejs-directory
```

Using yarn:

```bash
$ yarn add @unified-api/vuejs-directory
```

Once the package is installed, you can import the component using `import`

```ts
import UnifiedDirectory from '@unified-api/vuejs-directory';
```

## Example

```vue
<template>
    <UnifiedDirectory workspaceId="12345" />
</template>

<script lang="ts">
import UnifiedDirectory from '@unified-api/vuejs-directory';

export default {
    components: {
        UnifiedDirectory,
    },
};
</script>
```
