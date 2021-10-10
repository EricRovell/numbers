<script lang="ts">
  export let value: number | undefined = undefined;
  export let placeholder: string | undefined = undefined;

  export let name: string | undefined = undefined;
  export let required = false;
  export let min: number | undefined = undefined;
  export let max: number | undefined = undefined;
  export let step: number | undefined = undefined;
</script>

<input
  type="number"
  {required}
  bind:value
  {min}
  {max}
  {step}
  {name}
  on:input
  on:change
  on:focus
  on:blur
  on:keydown
  {placeholder}
>

<style>
  input {
    background: none;
    outline: none;
    border: none;
    text-overflow: ellipsis;
    width: 100%;
    
    color: inherit;
    font-size: inherit;
    font-family: inherit;
  }

  input:focus {
    outline: none;
    border: none;
  }

  input::placeholder {
    font-family: inherit;
    color: inherit;
    opacity: 0.75;
  }
</style>