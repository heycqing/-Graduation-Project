// 链接本地mongodb
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:123456@localhost:27017/cqing_db";
 
MongoClient.connect(url,  function(err, db) {
  if (err) throw err;
  console.log("数据库已创建!");
  db.close();
});