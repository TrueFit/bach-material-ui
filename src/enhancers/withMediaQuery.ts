import {EnhancerContext, EnhancerResult} from '@truefit/bach';
import useMediaQuery, {Options} from '@material-ui/core/useMediaQuery';
import {Theme} from '@material-ui/core/styles/createMuiTheme';

export default <T>(callbackName: keyof T, fn: (theme: Theme) => string, options: Options = {}) =>
  ({generateNewVariable}: EnhancerContext): EnhancerResult => {
    const fnAlias = generateNewVariable();
    const optionsAlias = generateNewVariable();

    return {
      dependencies: {
        useMediaQuery,

        [fnAlias]: fn,
        [optionsAlias]: options,
      },
      initialize: `const ${callbackName} = useMediaQuery(${fnAlias}, ${optionsAlias});`,
      props: [callbackName as string],
    };
  };
