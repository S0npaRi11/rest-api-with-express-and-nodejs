const express = require('express')
const fs = require('fs')
const router = express.Router()

router.route('/')
    .post((req,res) => {
        const content = JSON.stringify(req.body)
        fs.writeFile(`./info/${req.body.id}.json`, content, err => {
            if(err){
                console.log(err)
                res.json({Error: 'Error while inserting content'})
            }

            res.json({Success: 'Content written successfully'})
        })
    })

router.route('/:id')
    .get((req,res) => {
        fs.readFile(`./info/${req.params.id}.json`, 'utf-8', (err, data) => {
            if(err){
                console.log(err)
                res.json({Error: 'Error while reading content'})
            }
            res.json(JSON.parse(data))
        })
    })

    .delete((req,res) => {
        fs.unlink(`./info/${req.params.id}.json`, (err) => {
            if(err){
                console.log(err)
                res.json({Error: 'Error while deleting content'})
            }

            res.json({Success: 'Content deleted successfully'})
        })        
    })

    .patch((req,res) => {
        const content = JSON.stringify(req.body)
        fs.writeFile(`./info/${req.params.id}.json`,content, (err) => {
            if(err){
                console.log(err)
                res.json({Error: 'Error while updating contnent'})
            }

            res.json({Success: 'Content Updated successfully'})
        })
    })


module.exports = router