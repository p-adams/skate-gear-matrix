<script lang="ts">
  import { SPITFIRES } from "../data/wheel";
  $: labelFromKey = (key: string) => {
    return key.replaceAll("_", " ").toLocaleUpperCase();
  };
</script>

<section>
  <h1>Spitfire</h1>
  <section>
    <h3>Formula Four</h3>
    <div class="wheel-grid">
      {#each Object.entries(SPITFIRES.formula_four) as [type, wheels]}
        <div class="wheel-spec-table">
          <h5>{labelFromKey(type)}</h5>
          <div class="wheel-spec-row header">
            <div class="th">Size</div>
            <div class="th">Width</div>
            <div class="th">Riding</div>
          </div>
          {#each wheels as { size, width, riding }}
            <div class="wheel-spec-row">
              <div>{size}</div>
              <div>{width}</div>
              <div>{riding}</div>
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </section>
</section>

<style>
  .wheel-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .wheel-spec-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
  }
  .wheel-spec-row.header {
    outline: 1px solid;
    margin-bottom: 12px;
  }
  @media only screen and (max-width: 767px) {
    .wheel-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
