var pool = require('./bd')

async function getNovedades(){
    var query = 'select * from m5u1'
    var rows = await pool.query(query)
    return rows
}

async function deleteNovedadesById(id){
    var query = 'delete from m5u1 where id = ?'
    var rows = await pool.query(query, [id])
    return rows
}

module.exports = {getNovedades, deleteNovedadesById}