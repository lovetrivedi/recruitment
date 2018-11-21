// /* @flow */
import * as React from 'react';

// export default () => <h1>Heading</h1>

import { graphql } from 'react-relay';
import { nextQuery } from '../controls/relay';
import PropertiesList from './PropertiesList';

import type { propertiesQuery } from './__generated__/propertiesQuery.graphql';

const PropertyList = props => <PropertiesList {...props} />;

const PropertyL = nextQuery<propertiesQuery, { sortDirection: string }>(() => ({
  query: graphql`
    query propertiesQuery($sortDirection: String!) {
      property: properties(sortDirection: $sortDirection) {
        totalCount
        edges {
          node {
            id
            livingSurface
            landSurface
            numberOfRooms
            numberOfParkings
            createdAt
          }
        }
      }
    }
  `,
  variables: {
    sortDirection: 'desc',
  },
  cacheStrategy: 'cache-first',
}))(PropertyList);

export default PropertyL;
