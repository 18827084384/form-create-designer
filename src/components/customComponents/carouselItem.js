const label = 'carousel-item';
const name = 'carousel-item';

export default {
  icon: 'icon-carousel',
  label,
  name,
  inside: true,
  drag: true,
  dragBtn: false,
  rule() {
    return {
      type: 'el-carousel-item',
      props: { label: '新标签页' },
      children: []
    };
  },
  props() {
    return [
      { type: 'input', field: 'name', title: '幻灯片的名字' },
      { type: 'input', field: 'label', title: '该幻灯片所对应指示器的文本' },
    ];
  },
};
