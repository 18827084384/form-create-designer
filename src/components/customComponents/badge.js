const label = 'badge';
const name = 'badge';

export default {
  icon: 'el-icon-orange',
  label,
  name,
  rule() {
    return {
      type: 'el-badge',
      children: ['badge']
    };
  },
  props() {
    return [
      {
        type: 'input',
        field: 'value',
        title: 'value',
      },
      {
        type: 'select',
        field: 'is-dot',
        title: '小圆点',
        options: [
          { label: '否', value: false },
          { label: '是', value: true },
        ],
      },
      {
        type: 'select',
        field: 'hidden',
        title: '隐藏 badge',
        options: [
          { label: '是', value: true },
          {
            label: '否',
            value: false,
          },
        ],
      },
      {
        type: 'select',
        field: 'type',
        title: '类型',
        options: [
          { label: 'primary', value: 'primary' },
          { label: 'success', value: 'success' },
          { label: 'warning', value: 'warning' },
          { label: 'danger', value: 'danger' },
          { label: 'info', value: 'info' },
        ],
      },
    ];
  },
};
