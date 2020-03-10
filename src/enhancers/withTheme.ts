import {useTheme} from '@material-ui/styles';
import {EnhancerResult} from '@truefit/bach';
import {THEME} from '../constants';

export default (themeName: string = THEME) => (): EnhancerResult => {
  return {
    dependencies: {
      useTheme,
    },
    initialize: `const ${themeName} = useTheme();`,
    props: [themeName],
  };
};
