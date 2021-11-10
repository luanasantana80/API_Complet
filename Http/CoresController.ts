import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cores from 'App/Models/Cores'

export default class CoresController {
  //Metodo de GET abaixo com Paginação
  public async index(ctx: HttpContextContract) {
    const page = ctx.request.input('page', 1)
    const limit = 2
    const CoresObj = await Cores.query().paginate(page, limit)
    return ctx.response.send(CoresObj)
  }
  //Metodo de POST e PUT abaixo
  public async store(ctx: HttpContextContract) {
    const fields = ctx.request.only(['name'])
    const { id } = ctx.request.params()
    let CoresObj
    if (id) {
      CoresObj = await Cores.query().where('id', id).update(fields)
    } else {
      CoresObj = await Cores.create(fields)
    }

    return ctx.response.send(CoresObj)
  }
  //Metodo de DELETE abaixo
  public async destroy(ctx: HttpContextContract) {
    const { id } = ctx.request.params()
    const exclude = await Cores.query().where('id', id).delete()

    return ctx.response.send(exclude)
  }
  //Metodo de LIST UNID abaixo
  public async getById(ctx: HttpContextContract) {
    const { id } = ctx.request.params()
    const data = await Cores.find(id)

    return ctx.response.send(data)
  }
}
