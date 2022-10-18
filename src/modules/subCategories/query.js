
const GETCATEGORY = `select * from sub_category where status = 1`;
const POSTCATEGORY = `insert into sub_category(name, category_id) values($1, $2) returning name, id, category_id`;
const DELETECATEGORY = `update sub_category set status = $2 where id = $1`;
const UPDATECATEGORY = `update sub_category set name = $2, category_id = $3 where id = $1`;

export { GETCATEGORY, POSTCATEGORY, DELETECATEGORY, UPDATECATEGORY };
