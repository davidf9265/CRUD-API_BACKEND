const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM contacto', (err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO contacto SET ?', [req.body], (err,rows)=>{
            if(err) return res.send(err)

            res.send('inserted register')
        })
    })
})

routes.delete('/:id', (req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM contacto WHERE IdContacto = ?', [req.params.id], (err,rows)=>{
            if(err) return res.send(err)

            res.send('deleted contacto')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE contacto set ? WHERE IdContacto = ?', [req.body,req.params.id], (err,rows)=>{
            if(err) return res.send(err)

            res.send('Contact updated')
        })
    })
})


module.exports = routes