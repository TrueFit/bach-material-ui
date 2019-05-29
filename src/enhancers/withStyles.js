import {makeStyles} from '@material-ui/styles';
import {PROPS} from '@truefit/bach';
import {CLASSES} from '../util/constants';

export default (createStyles, options = {}, classesName = CLASSES) => ({
  generateNewVariable,
}) => {
  const useStylesAlias = generateNewVariable();
  const useStyles = makeStyles(createStyles, options);

  return {
    dependencies: {
      [useStylesAlias]: useStyles,
    },
    initialize: `const ${classesName} = ${useStylesAlias}(${PROPS});`,
    props: [classesName],
  };
};
