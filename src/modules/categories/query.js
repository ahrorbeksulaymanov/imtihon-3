
const GETCATEGORY = `select * from category where status = 1`;
const POSTCATEGORY = `insert into category(name) values($1) returning name, id`;
const DELETECATEGORY = `update category set status = $2 where id = $1`;
const UPDATECATEGORY = `update category set name = $2 where id = $1`;

export { GETCATEGORY, POSTCATEGORY, DELETECATEGORY, UPDATECATEGORY };