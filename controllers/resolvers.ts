import list from "../db/db.json";

export const resolvers = {
  Query: {
    list: () => list,
    findUser(parent: any, args: any, context: any, info: any) {
      var search = args.name;
      var condition = new RegExp(search);
      return list.find((user) => condition.test(user.name));
    },
    findFriends(parent: any, args: any, context: any, info: any) {
      var search = args.name;
      var condition = new RegExp(search);
      return list.find((user) => condition.test(user.name));
    },
  },
};
