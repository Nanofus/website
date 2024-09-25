<script lang="ts">
  import {T, useTask} from '@threlte/core';
  import {interactivity} from '@threlte/extras';
  import {spring} from 'svelte/motion';

  console.log(T);

  interactivity();
  const scale = spring(1);
  let rotation = 0;
  useTask((delta) => {
    rotation += delta * 0.2;
  });
</script>

<T.PerspectiveCamera
        makeDefault
        position={[10, 10, 10]}
        on:create={({ ref }) => {
    ref.lookAt(0, 1, 0)
  }}
/>
<T.DirectionalLight position={[0, 10, 10]}/>
<T.AmbientLight intensity={0.4}/>
<T.Mesh
        rotation.y={rotation}
        position.y={1}
        scale={$scale}
        on:pointerenter={() => scale.set(1.1)}
        on:pointerleave={() => scale.set(1)}
>
    <T.BoxGeometry args={[3, 3, 3]}/>
    <T.MeshStandardMaterial color="#7AA89F"/>
</T.Mesh>
