
module.exports = {
	path:'age',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./AgeCom.js'));
        });
    }
};