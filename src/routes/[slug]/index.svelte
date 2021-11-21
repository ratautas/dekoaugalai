<script context="module">
  // see https://kit.svelte.dev/docs#loading
  export const load = async ({ fetch, ...rest }) => {
    console.log(rest)
    const response = await fetch('/pages.json')
    const pages = await response.json()

    return {
      props: {
        pages,
      },
    }
  }
</script>

<script>
  export let pages = []
</script>

<style>
  .content {
    width: 100%;
    max-width: var(--column-width);
    margin: var(--column-margin-top) auto 0 auto;
  }
</style>

<svelte:head>
  <title>Page</title>
</svelte:head>

<div class="content">
  <h1>Page</h1>
  <p>krontent</p>
  <p>{JSON.stringify(pages)}</p>
</div>
