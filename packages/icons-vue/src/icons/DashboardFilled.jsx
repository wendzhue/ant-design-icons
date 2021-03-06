
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DashboardFillSvg from '@ant-design/icons-svg/lib/fill/DashboardFill';

export default {
  name: 'IconDashboardFilled',
  displayName: 'DashboardFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DashboardFillSvg } },
      children
    ),
};
