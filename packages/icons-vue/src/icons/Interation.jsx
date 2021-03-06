
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InterationOutlineSvg from '@ant-design/icons-svg/lib/outline/InterationOutline';

export default {
  name: 'IconInteration',
  displayName: 'Interation',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InterationOutlineSvg } },
      children
    ),
};
