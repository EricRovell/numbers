<script lang="ts">
  import { page } from "$app/stores";  
  import { setContext } from "svelte";
  import styles from "./menu.module.css";
  
  setContext("page", page);
</script>

<nav class={styles.nav}>
  <ul>
    <slot />
  </ul>
</nav>