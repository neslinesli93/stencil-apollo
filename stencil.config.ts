import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import alias from '@rollup/plugin-alias';

export const config: Config = {
  outputTargets: [
    {
      type: 'www',
    },
  ],
  globalScript: 'src/global/app.ts',
  plugins: [
    sass(),
    alias({
      resolve: ['.tsx', '.ts'],
      entries: [{ find: '@', replacement: `${__dirname}/src` }],
    }),
  ],
};
