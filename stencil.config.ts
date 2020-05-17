import { Config } from '@stencil/core';
import {sass} from '@stencil/sass';

export const config: Config = {
  namespace: 'prova-stencil',
  globalStyle: 'src/global/app.scss',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [sass(
    {
      injectGlobalPaths: ['src/global/variables.scss'],
    }
  )],
};
