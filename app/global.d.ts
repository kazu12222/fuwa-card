// global.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    "a-scene": any;
    "a-assets": any;
    "a-asset-item": any;
    "a-camera": any;
    "a-entity": any;
    "a-plane": any;
    "a-gltf-model": any;
    // 他にも使用するA-Frame要素があれば追加できます
  }
}
