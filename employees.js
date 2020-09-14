const express = require('express')
const employee = require('../models/employee')
const router = express.Router()
const Employee = require('../models/employee')


router.get('/', async(req,res) => { 
    try{
            const employees = await Employee.find()
            res.json(employees)
    }catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id', async(req,res) => { 
    try{
            const employee = await Employee.findById(req.params.id)
            res.json(employee)
    }catch(err){
        res.send('nullS')
    }
})

router.post('/', async(req,res) => {
    const employee = new Employee({
        id: req.body.id,
        name: req.body.name,
        lateness: req.body.lateness,
        absence: req.body.absence,
        vocation: req.body.vocation

    })

    try{
        const a1 = await employee.save()
        res.json(a1)
    }catch(err){
        res.send('Error'.err)
    }
})

router.patch('/:id',async(req,res) => { 
    try{
            const employee = await Employee.findById(req.params.id)
            employee.sub = req.body.sub
            const a1 = await employee.save()
            res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id',(req,res) => {
    try{
       Employee.findByIdAndRemove(req.params.id).then(data=>res.send('sukses'))
    }catch(err){
        res.send('error')
    }
})
module.exports = router 