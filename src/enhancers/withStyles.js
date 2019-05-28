import {makeStyles} from '@material-ui/styles';
import {PROPS} from '@truefit/bach';
import {CLASSES} from '../util/constants';

export default (createStyles, classesName = CLASSES) => ({
  generateNewVariable,
}) => {
  const createStylesAlias = generateNewVariable();
  return {
    dependencies: {
      makeStyles,
      [createStylesAlias]: createStyles,
    },
    initialize: `const ${classesName} = makeStyles(${createStylesAlias})(${PROPS});`,
    props: [classesName],
  };
};
