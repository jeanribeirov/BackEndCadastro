import { Application } from '@ioc:Adonis/Core/Application';
import { v4 as uuidv4 } from 'uuid'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cadastro from 'App/Models/Cadastro'
export default class CadastrosController {
  public async store({ request, response }: HttpContextContract) {

    const body = request.body()
    const image =


    const cadastro = await Cadastro.create(body)

    response.status(201)

    return {
      message: 'Cadastro Feito com Sucesso!',
      data: cadastro,
    }

  }
}
