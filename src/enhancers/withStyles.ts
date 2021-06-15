/* eslint-disable @typescript-eslint/no-explicit-any */
import {makeStyles, Styles, WithStylesOptions} from '@material-ui/styles';
import {PROPS, EnhancerContext, EnhancerResult} from '@truefit/bach';
import {CLASSES} from '../constants';

export default (
    createStyles: Styles<any, any>,
    options: WithStylesOptions = {},
    classesName: string = CLASSES,
  ) =>
  ({generateNewVariable}: EnhancerContext): EnhancerResult => {
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
