var admin_nick
var admin_pass
var users_ids
var user_id
var communities_ids

describe('CMMs', () => {

    before(() => {
        cy.fixture('bot_env').then(function (data) {
            admin_nick      = data.user_admin_email
            admin_pass      = data.user_admin_password
            users_ids       = data.user_url_nick_comma_separated
            communities_ids = data.communities_id_comma_separated
        })
    })      

    it('Aprovações', () => {
        cy.log('Admin Nick: ' + admin_nick)
        cy.visit('https://yoble.us/login')
        cy.get('input[name="email"]')
        .click()
        .type(admin_nick)
        cy.get('input[name="password"]')
        .click()
        .type(admin_pass)
        cy.get('input[name="rememberme"]').click()
        cy.get('input[value="Entrar"]').click()

        const usersIdArray = users_ids.split(',')
        usersIdArray.forEach((user_Nick) => {
            cy.log('Aprovação do user: ' + user_Nick)
            cy.visit('https://yoble.us/' + user_Nick)
            cy.contains('a', 'Adicionar como amigo').invoke('attr', 'href').then((href) => {
                const regex = /add-friend\/(\d+)/
                const match = href.match(regex)
                if (match) {
                    var codigoID    = match[1]
                    user_id         = codigoID
                    cy.log('O código ID é: ' + user_id)
                    cy.log('Iniciando Aprovações em massa nas comunidades!')
                    const idArray = communities_ids.split(',')
                    idArray.forEach((id) => {
                        cy.log('Aprovação do user na comunidade: ' + id)
                        cy.wait(2500)
                        cy.request({
                            url: 'https://yoble.us/Main/communities/alowed-member/' + id + '/' + user_id,
                            failOnStatusCode: false
                        })
                    })
                } else {
                    cy.log('O padrão da URL não corresponde ao esperado.')
                }
            });
        })

    })

})