import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Especies from 'App/Models/Especies'

export default class EspeciesController {
  //Metodo de GET abaixo com Paginação
  public async index(ctx: HttpContextContract) {
    const page = ctx.request.input('page', 1)
    const limit = 2
    const EspeciesObj = await Especies.query().paginate(page, limit)
    return ctx.response.send(EspeciesObj)
  }
  //Metodo de POST e PUT abaixo
  public async store(ctx: HttpContextContract) {
    const fields = ctx.request.only(['name'])
    const { id } = ctx.request.params()
    let EspeciesObj
    if (id) {
      EspeciesObj = await Especies.query().where('id', id).update(fields)
    } else {
      EspeciesObj = await Especies.create(fields)
    }

    return ctx.response.send(EspeciesObj)
  }
  //Metodo de DELETE abaixo
  public async destroy(ctx: HttpContextContract) {
    const { id } = ctx.request.params()
    const exclude = await Especies.query().where('id', id).delete()

    return ctx.response.send(exclude)
  }
  //Metodo de LIST UNID abaixo
  public async getById(ctx: HttpContextContract) {
    const { id } = ctx.request.params()
    const data = await Especies.find(id)

    return ctx.response.send(data)
  }
}
