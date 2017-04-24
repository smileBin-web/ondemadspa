
module.exports = {
	path:'edu',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./Educom.js'));
        });
    }
};