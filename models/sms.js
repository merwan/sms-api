module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback([
        { message: "Hi there!" },
        { message: "OK, thanks" }
      ]);
    }
  };
};
