const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

//Mongoose Models
const Journal = require("../models/Journal");

// Journal Type
const JournalType = new GraphQLObjectType({
  name: "Journal",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    journals: {
      type: new GraphQLList(JournalType),
      resolve(parent, args) {
        return Journal.find();
      },
    },
    journal: {
      type: JournalType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Journal.findById(args.id);
      },
    },
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // new Journal

    addJournal: {
      type: JournalType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let journal = new Journal({
          title: args.title,
          content: args.content,
        });
        return journal.save();
      },
    },

    // delete Journal
    deleteJournal: {
      type: JournalType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(args) {
        return Journal.findByIdAndRemove(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
