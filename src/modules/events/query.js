
const GETDATA = `
select
 * 
from events as e
where 
        case 
            when length($1)>0 then e.title like '%' || $1 || '%'
            else true
        end
    and
        case 
            when length($2)>0 then e.date = $2
            else true
        end
    and
        case 
            when $3 > 0 then e.sub_category_id = $3
            else true
        end
    and
        case 
            when length($4)>0 then e.format = $4
            else true
        end
    and
        case 
            when length($5)>0 then e.firstname = $5
            else true
        end
    
        LIMIT $7
        OFFSET ($6-1)*$7
`;


const GETONEDATA = `select * from events where id = $1`;
const POSTDATA = `insert into events
    (title, firstname, lastname, position, time, format, date, status, number, description, sub_category_id) values
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) 
returning 
    title, firstname, lastname, position, time, format, date, status, number, description, sub_category_id`;
const DELETEDATA = `update events set status = $2 where id = $1`;
const UPDATEDATA = `update events set title = $2, firstname = $3, lastname= $4, position= $5, time= $6, format= $7, date= $8, number= $9, description= $10, view_count_id= $11, sub_category_id= $12  where id = $1`;
const ADDCOUNT = `update events set count = $2  where id = $1`;

// event permission query
const CHECKPERMISSION = `update events set status = $2 where id = $1`;

export { GETDATA, POSTDATA, DELETEDATA, UPDATEDATA, CHECKPERMISSION, GETONEDATA, ADDCOUNT }