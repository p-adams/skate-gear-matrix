<script>
  import { SPITFIRES } from "../data/wheel";
</script>

<section>
  <h1>Spitfire</h1>
  <section>
    <h3>Formula Four</h3>
    {#each Object.entries(SPITFIRES.formula_four) as [type, wheels]}
      <div class="wheel-spec-table">
        <h5>{type}</h5>
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
  </section>
</section>

<style>
  .wheel-spec-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
  }
  .wheel-spec-row.header {
    outline: 1px solid;
    margin-bottom: 12px;
  }
</style>
