import {query} from './index';

const getUserInfo = (userId)=>{
    let sql = `select * from userInfo where id=${userId}`;
    return query(sql)
};

//todo 登陆
const loginCheck =(userName)=>{
    let sql = `select * from userInfo where user_name="${userName}"`;
    return query(sql)
};

//todo 插入
const userInsert =(option)=>{
    let sql = `insert into userInfo set ?`;
    return query(sql,option)
};

// todo 查询作者列表(只包括写过文章的)
 const getUserList = ()=>{
     let sql = `SELECT
                    user_id,
                    user_name,
                    love_count,
                    articles_count 
                FROM
                    (
                SELECT
                    u.user_name,
                    u.id,
                    SUM( love_count ) AS love_count 
                FROM
                    ( SELECT user_id, ( SELECT COUNT( * ) FROM love_article_relation lar WHERE lar.article_id = a.id ) AS love_count FROM articles a ) A
                    LEFT JOIN userInfo u ON u.id = A.user_id 
                GROUP BY
                    A.user_id 
                    ) B
	            LEFT JOIN ( SELECT a.user_id, COUNT( * ) AS articles_count FROM articles a GROUP BY user_id ) C ON B.id = C.user_id`;
     return query(sql)
 };

export {
    getUserInfo,
    loginCheck,
    userInsert,
    getUserList
}