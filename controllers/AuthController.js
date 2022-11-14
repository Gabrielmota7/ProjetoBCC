const User = require('../models/User')

const bcrypt = require('bcryptjs')

module.exports = class AuthController {
    static login(req, res) {
        res.render('auth/login')
    }

    static async loginPost(req, res) {

        const {email, senha} = req.body
        
        //find user
        const user = await User.findOne({where: {email: email}})

        if(!user) {
            req.flash('message', 'o usuario não encontrado')
            res.render('auth/login')

            return
        }
        // checando se a senha existe
        const passwordMatch = bcrypt.compareSync(senha, user.senha)

        if(!passwordMatch) {
            req.flash('message', 'Senha invalida')
            res.render('auth/login')

            return
        }

        

        // inicializar a session
        req.session.userid = user.id

        req.flash('message', 'login efetuado com sucesso')

        req.session.save(() => {
            res.redirect('pedidos/pedidos')

            
        })  
    }

    static register(req, res) {
        res.render('auth/register')
    }

    static async registerPost(req, res){
        
        const { nome, email, senha, confirmpassword } = req.body

        // password match validation
        if(senha != confirmpassword) {
            //mensagem para o front caso senha seja diferente
            req.flash('message', 'As senhas não conferem, tente novamente!')
            res.render('auth/register')

            return
        }

        // checando se o usuario já existe
        const checkIfUserExists = await User.findOne({where: {email: email}})

        if(checkIfUserExists) {
            req.flash('message', 'o e-mail já está em uso!')
            res.render('auth/register')
        }

        // criando senha
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(senha, salt)

        const user = {
            nome,
            email,
            senha: hashedPassword
        }

        try{
            const createdUser = await User.create(user)

            // inicializar a session
            req.session.userid = createdUser.userid

            req.flash('message', 'Cadastro realizado com sucesso')

            req.session.save(() => {
                res.redirect('pedidos/pedidos')

                
            })            
        }catch(err){
            console.log(err)
        }
        
    }

    static logout(req, res) {
        req.session.destroy()
        console.log("saimos com sucesso ;)")
        res.redirect('/login')
    }
}

