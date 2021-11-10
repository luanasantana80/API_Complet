import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ambientes from 'App/Models/Ambientes'

export default class AmbientesController {
  //Metodo de GET abaixo com Paginação
  public async index(ctx: HttpContextContract) {
    const page = ctx.request.input('page', 1)
    const limit = 2
    const AmbientesObj = await Ambientes.query().paginate(page, limit)
    return ctx.response.send(AmbientesObj)
  }
  //Metodo de POST e PUT abaixo
  public async store(ctx: HttpContextContract) {
    const fields = ctx.request.only(['name', 'localization', 'climate'])
    const { id } = ctx.request.params()
    let AmbientesObj
    if (id) {
      AmbientesObj = await Ambientes.query().where('id', id).update(fields)
    } else {
      AmbientesObj = await Ambientes.create(fields)
    }

    return ctx.response.send(AmbientesObj)
  }
  //Metodo de DELETE abaixo
  public async destroy(ctx: HttpContextContract) {
    const { id } = ctx.request.params()
    const exclude = await Ambientes.query().where('id', id).delete()

    return ctx.response.send(exclude)
  }
  //Metodo de LIST UNID abaixo
  public async getById(ctx: HttpContextContract) {
    const { id } = ctx.request.params()
    const data = await Ambientes.find(id)

    return ctx.response.send(data)
  }
}
