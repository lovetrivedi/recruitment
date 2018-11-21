/* @flow */

import React from 'react';
import { graphql } from 'react-relay';
import { Flex } from '@rebass/grid/emotion';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from '../../controls/link';

import {
  type FragmentRefs,
  createFragment,
  createMutation,
} from '../../controls/relay';

import type { Property_property } from './__generated__/Property_property.graphql';
import type { PropertyUpsertMutation } from './__generated__/PropertyUpsertMutation.graphql';
import UserForm from './UserForm';

type PropertyData = {|
  lead?: Property_property,
|};

const PropertyFragment = createFragment<PropertyData>(
  graphql`
    fragment Property_property on Property {
      id
      livingSurface
      landSurface
      numberOfRooms
      numberOfParkings
    }
  `
);

const imaginaryUser = {
  id: '',
  livingSurface: '',
  landSurface: '',
  numberOfRooms: '',
  numberOfParkings: '',
};

const PropertyUpsertLead = createMutation<PropertyUpsertMutation, {}>(graphql`
  mutation PropertyUpsertMutation($input: UpsertPropertyInput!) {
    upsertProperty(input: $input) {
      property {
        id
        livingSurface
        landSurface
        numberOfRooms
        numberOfParkings
      }
    }
  }
`);

type Props = {|
  ...FragmentRefs<PropertyData>,
  step?: string,
|};

export const Property = (props: Props) => {
  return (
    <>
      <PropertyFragment property={props.property}>
        {() => (
          <div>
            <div
              style={{
                maxWidth: 980,
                marginTop: 30,
                marginBottom: 0,
                width: '100%',
                margin: '0 auto',
              }}
            >
              <Link href={{ pathname: '/' }}>
                <Button
                  to="/"
                  color="primary"
                  variant="contained"
                  css={{
                    marginTop: 24,
                    marginBottom: 20,
                    height: 35,
                    width: 150,
                    backgroundColor: '#327ccb',
                  }}
                >
                  BACK TO LIST
                </Button>
              </Link>
            </div>
            <Flex justifyContent="center">
              <Paper
                css={{
                  maxWidth: 980,
                  marginTop: 16,
                  width: '100%',
                  padding: 16,
                }}
              >
                <Typography variant="h6" css={{ padding: 16 }}>
                  Property
                </Typography>
                <PropertyUpsertLead>
                  {props => {
                    return (
                      <div className="App">
                        <UserForm
                          user={imaginaryUser}
                          onSubmit={values =>
                            props.mutate(values, () => {
                              window.location.assign('/');
                            })
                          }
                        />
                      </div>
                    );
                  }}
                </PropertyUpsertLead>
              </Paper>
            </Flex>
          </div>
        )}
      </PropertyFragment>
    </>
  );
};
