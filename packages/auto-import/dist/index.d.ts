import { Resolver } from 'unplugin-auto-import/types';

declare const antdResolver: () => Resolver;

declare const tanStackResolver: (type: string) => Resolver;

export { antdResolver, tanStackResolver };
