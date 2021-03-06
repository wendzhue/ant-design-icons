
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import VideoCameraFillSvg from '@ant-design/icons-svg/lib/fill/VideoCameraFill';

export default {
  name: 'IconVideoCameraFilled',
  displayName: 'VideoCameraFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: VideoCameraFillSvg } },
      children
    ),
};
