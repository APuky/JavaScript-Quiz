import { config } from '@keystone-6/core';
import { lists } from './schemas';
import { withAuth, session } from './auth';
import { KeystoneContext } from '@keystone-6/core/types';
require('dotenv').config();

export default withAuth(
  config({
    graphql: {
      playground: process.env.PLAYGROUND === 'true',
    },
    server: {
      cors: {
        origin: [
          process.env.FRONTEND_DOMAIN_URL!,
          'http://localhost:3200',
          'http://localhost:3300',
        ],
        credentials: true,
      },
      port: +process.env.PORT!,
    },
    db: {
      provider: 'postgresql',
      url: process.env.DATABASE_URL!,
      useMigrations: true,
      // enableLogging: true,
    },
    ui: {
      isAccessAllowed: (context: KeystoneContext) =>
        !!context.session?.data?.isAdmin,
    },
    lists,
    session,
    experimental: {
      // enableNextJsGraphqlApiEndpoint: true,
      // generateNextGraphqlAPI: true,
      // generateNodeAPI: true,
    },
  })
);
