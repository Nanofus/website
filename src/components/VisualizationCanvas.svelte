<script lang="ts">
  import {Canvas} from '@threlte/core'
  import Visualization from "./Visualization.svelte";
</script>

<div class="visualization-wrapper">
    <Canvas>
        <Visualization/>
    </Canvas>
</div>

<style>
    .visualization-wrapper {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
</style>