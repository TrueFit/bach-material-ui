import {useTheme} from '@material-ui/styles';
import {THEME} from '../util/constants';

export default (themeName = THEME) => () => {
  return {
    dependencies: {
      useTheme,
    },
    initialize: `const ${themeName} = useTheme();`,
    props: [themeName],
  };
};
