import {query} from './index';

//todo 保存article
const save = (option) => {
    let sql = `insert into articles set ?`;
    return query(sql, option)
};

const getArticleInfoById = () => {
    let sql = `SELECT
	* 
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
    save,
    getArticleInfoById
}