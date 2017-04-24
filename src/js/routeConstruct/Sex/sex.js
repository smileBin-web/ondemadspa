
module.exports = {
	path:'sex',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./SexCom.js'));
        });
    }
};