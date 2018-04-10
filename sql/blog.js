import {query} from './index';

//todo 获取article列表
const getList = (pageNum,pageSize) => {
    let sql =
        `SELECT
            article_title,
            article_desc,
            user_id,
            user_name,
            createtime,
            a.id,
	        ( SELECT COUNT( 0 ) FROM love_article_relation lar WHERE a.id = lar.article_id ) AS love_count,
	        ( SELECT COUNT( 0 ) FROM comment_article_relation car WHERE a.id = car.article_id ) AS comment_count 
        FROM
	        articles a
	    LEFT JOIN userInfo u ON u.id = a.user_id limit ${(pageNum-1)*pageSize},${pageSize}`;
    return query(sql)
};

export {
    getList
}