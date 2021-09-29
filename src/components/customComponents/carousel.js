const label = 'carousel';
const name = 'carousel';

export default {
  icon: 'el-icon-orange',
  label,
  name,
  children: 'carousel-item',
  rule() {
    return {
      type: 'el-carousel',
      children: []
    };
  },
  props() {
    return [
      {
        type: 'input',
        field: 'height',
        title: 'height',
      },
      {
        type: 'select',
        field: 'trigger',
        title: '指示器的触发方式',
        options: [
          { label: 'click', value: 'click' },
          { label: 'default', value: 'default' },
        ],
      },
      {
        type: 'select',
        field: 'autoplay',
        title: '是否自动切换',
        options: [
          { label: '是', value: 'true' },
          {
            label: '否',
            value: 'false',
          },
        ],
      },
      {
        type: 'select',
        field: 'type',
        title: '走马灯的类型',
        options: [
          { label: 'defalut', value: '' },
          {
            label: 'card',
            value: 'card',
          },
        ],
      },
    ];
  },
};
