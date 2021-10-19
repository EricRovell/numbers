<script lang="ts" context="module">
  import type { Page } from "@sveltejs/kit";
  import type { Readable } from "svelte/store";

  type PageContext = Readable<Page<Record<string, string>>>;
</script>

<script lang="ts">
  import { getContext } from "svelte";
  import { active } from "./active";
  import styles from "./menu.module.css";

  export let href = "";
  export let disabled = false;
  export let prefetch: true | undefined = undefined;
  export let pattern: RegExp | null = null;
  
  const page = getContext<PageContext>("page");

  // if no `href` is provided -> link will be disabled
  $: disabled = href ? disabled : true;
</script>

<li>
  <a
    class={styles["menu-item"]}
    class:disabled
    {href}
    use:active={{ current: $page.path, pattern }}
    sveltekit:prefetch={prefetch}>
      <slot />
  </a>
</li>

<style>
  .disabled {
    pointer-events: none;
    color: var(--color-gray-300);
    text-decoration: line-through;
  }
</style>