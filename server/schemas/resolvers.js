const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find()
      },
      user: async (parent, { username }) => {
        return User.findOne({ username })
      },

     
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id })
        }
        throw new AuthenticationError('You need to be logged in!');
      },
    },
  
    Mutation: {
      addUser: async (parent, args ) => {
        const user = await User.create(args);
        console.log("Hello");
        const token = signToken(user);
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      },
      
      saveBook: async (parent, args, context) => {
        if (context.user) {
          const updateData = await User.findByIdAndUpdate(
            {_id: context.user._id},
            {$push: {savedBooks: args.bookData}},
            {new: true}
          )
          return updateData;
        }
        throw new AuthenticationError('Need to be signed in') 
      },
     
      removeBook: async (parent, args, context) => {
        if (context.user) {
          const updateData = await User.findByIdAndUpdate(
            {_id: context.user._id},
            {$pull: {savedBooks: args.bookId}},
            {new: true}
          )
          return updateData;
        }
        throw new AuthenticationError('Need to be signed in')
      }
 

    },
  };

module.exports = resolvers;