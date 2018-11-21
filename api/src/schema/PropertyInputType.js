import { GraphQLID, GraphQLInputObjectType, GraphQLFloat } from 'graphql';

export const fields = {
  id: { type: GraphQLID },
  livingSurface: { type: GraphQLFloat },
  landSurface: { type: GraphQLFloat },
  numberOfRooms: { type: GraphQLFloat },
  numberOfParkings: { type: GraphQLFloat },
};

export const PropertyInputType = new GraphQLInputObjectType({
  name: 'PropertyInput',
  fields,
});
