import mysql from 'promise-mysql';
import keys from './keys';
var pool = mysql.createPool(keys.database);
pool.getConnection()
    .then(function (connection) {
    pool.releaseConnection(connection);
    console.log('DB is Connected');
});
export default pool;
//# sourceMappingURL=database.js.map