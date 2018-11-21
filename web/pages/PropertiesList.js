/* @flow */

import * as React from 'react';
import { Flex } from '@rebass/grid/emotion';
import Head from 'next/head';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { graphql } from 'react-relay';
import moment from 'moment';
import { Link } from '../controls/link';

import { createMutation } from '../controls/relay';

import type { PropertiesListMutation } from './__generated__/PropertiesListMutation.graphql';

const PropertiesListDelete = createMutation<PropertiesListMutation, {}>(graphql`
  mutation PropertiesListMutation($input: DeletePropertyInput!) {
    deleteProperty(input: $input) {
      deletedPropertyId
    }
  }
`);

export default props => (
  <>
    <Head>
      <title>{'Home'}</title>
    </Head>
    <div
      style={{
        maxWidth: 1050,
        marginTop: 30,
        marginBottom: 0,
        width: '100%',
        margin: '0 auto',
      }}
    >
      <Link href={{ pathname: '/property' }}>
        <Button
          to="/property"
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
          CREATE NEW
        </Button>
      </Link>
    </div>
    <Flex justifyContent="center">
      <Paper
        css={{
          maxWidth: 1050,
          marginBottom: 16,
          width: '100%',
        }}
      >
        <Typography variant="h6" css={{ padding: 16 }}>
          Properties
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: '600', color: '#283237' }}>
                Created
              </TableCell>
              <TableCell
                style={{ fontWeight: '600', color: '#283237' }}
                numeric
              >
                Living Surface
              </TableCell>
              <TableCell
                style={{ fontWeight: '600', color: '#283237' }}
                numeric
              >
                Land Surface
              </TableCell>
              <TableCell
                style={{ fontWeight: '600', color: '#283237' }}
                numeric
              >
                Number of rooms
              </TableCell>
              <TableCell
                style={{ fontWeight: '600', color: '#283237' }}
                numeric
              >
                Number of parkings
              </TableCell>
              <TableCell numeric />
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.property.edges.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ fontSize: 14 }}
                  >
                    {moment(n.node.createdAt).fromNow()}
                  </TableCell>
                  <TableCell numeric style={{ fontSize: 14 }}>
                    {n.node.livingSurface}
                  </TableCell>
                  <TableCell numeric style={{ fontSize: 14 }}>
                    {n.node.landSurface}
                  </TableCell>
                  <TableCell numeric style={{ fontSize: 14 }}>
                    {n.node.numberOfRooms}
                  </TableCell>
                  <TableCell numeric style={{ fontSize: 14 }}>
                    {n.node.numberOfParkings}
                  </TableCell>
                  <TableCell numeric style={{ fontSize: 14 }}>
                    <PropertiesListDelete>
                      {({ mutate }) => (
                        <Button
                          css={{ height: 35, padding: 0 }}
                          onClick={() =>
                            mutate({ propertyId: n.node.id }, () =>
                              window.location.reload()
                            )
                          }
                        >
                          {' '}
                          delete{' '}
                        </Button>
                      )}
                    </PropertiesListDelete>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </Flex>
  </>
);
